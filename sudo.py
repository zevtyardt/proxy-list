#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import asyncio
import re
from pathlib import Path
from random import shuffle
from shutil import rmtree
from time import perf_counter
from typing import Callable, Dict, Iterable, List, Optional, Set, Tuple, Union

from aiohttp import ClientSession
from aiohttp_socks import ProxyConnector
from rich.console import Console
from rich.progress import (
    BarColumn,
    Progress,
    TaskID,
    TextColumn,
    TimeRemainingColumn,
)
from rich.table import Table

import config


class Proxy:
    def __init__(self, socket_address: str, ip: str) -> None:
        """
        Args:
            socket_address: ip:port
        """
        self.socket_address = socket_address
        self.ip = ip
        self.timeout = float("inf")

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, Proxy):
            return NotImplemented
        return self.socket_address == other.socket_address

    def __hash__(self) -> int:
        return hash(("socket_address", self.socket_address))


class Folder:
    def __init__(self, folder_name: str, path: Path) -> None:
        self.folder_name = folder_name
        self.path = path / folder_name

    def remove(self) -> None:
        try:
            rmtree(self.path)
        except FileNotFoundError:
            pass

    def create(self) -> None:
        self.path.mkdir(parents=True, exist_ok=True)


class ProxyScraperChecker:
    """HTTP, SOCKS4, SOCKS5 proxies scraper and checker."""

    def __init__(
            self,
            *,
            timeout: float,
            max_connections: int,
            sort_by_speed: bool,
            save_path: str,
            proxies: bool,
            http_sources: Optional[Iterable[str]],
            socks4_sources: Optional[Iterable[str]],
            socks5_sources: Optional[Iterable[str]],
            console: Optional[Console] = None,
            validation_targets: Optional[Iterable[str]]
    ) -> None:
        """HTTP, SOCKS4, SOCKS5 proxies scraper and checker.

        Args:
            timeout: How many seconds to wait for the connection.
            max_connections: Maximum concurrent connections.
            sort_by_speed: Set to False to sort proxies alphabetically.
            save_path: Path to the folder where the proxy folders will be
                saved.
        """
        self.path = Path(save_path)
        folders_mapping = {
            "proxies": proxies,
        }
        self.all_folders = [
            Folder(folder_name, self.path) for folder_name in folders_mapping
        ]
        self.enabled_folders = [
            folder
            for folder in self.all_folders
            if folders_mapping[folder.folder_name]
        ]
        if not self.enabled_folders:
            raise ValueError("all folders are disabled in the config")

        regex = r"(?:^|\D)(({0}\.{1}\.{1}\.{1}):{2})(?:\D|$)".format(
            r"(?:[1-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])",  # 1-255
            r"(?:\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])",  # 0-255
            r"(?:\d|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}"
            + r"|65[0-4]\d{2}|655[0-2]\d|6553[0-5])",  # 0-65535
        )
        self.regex = re.compile(regex)

        self.validation_targets = validation_targets
        self.sort_by_speed = sort_by_speed
        self.timeout = timeout
        self.sources = {
            proto: (sources,)
            if isinstance(sources, str)
            else frozenset(sources)
            for proto, sources in (
                ("http", http_sources),
                ("socks4", socks4_sources),
                ("socks5", socks5_sources),
            )
            if sources
        }
        self.proxies: Dict[str, Set[Proxy]] = {
            proto: set() for proto in self.sources
        }
        self.proxies_count = {proto: 0 for proto in self.sources}
        self.c = console or Console()
        self.sem = asyncio.Semaphore(max_connections)

    async def fetch_source(
            self,
            session: ClientSession,
            source: str,
            proto: str,
            progress: Progress,
            task: TaskID,
    ) -> None:
        """Get proxies from source.

        Args:
            source: Proxy list URL.
            proto: http/socks4/socks5.
        """
        try:
            async with session.get(source.strip(), timeout=15) as r:
                text = await r.text(encoding="utf-8")
        except Exception as e:
            self.c.print(f"{source}: {e}")
        else:
            for proxy in self.regex.finditer(text):
                self.proxies[proto].add(Proxy(proxy.group(1), proxy.group(2)))
        progress.update(task, advance=1)

    async def check_proxy(
            self, proxy: Proxy, proto: str, progress: Progress, task: TaskID
    ) -> None:
        """Check if proxy is alive."""
        try:
            async with self.sem:
                start = perf_counter()
                async with ClientSession(
                        connector=ProxyConnector.from_url(
                            f"{proto}://{proxy.socket_address}"
                        )
                ) as session:
                    for validation_target in self.validation_targets:
                        async with session.get(
                                validation_target,
                                timeout=self.timeout
                        ) as response:
                            if response.status != 200:
                                raise "One of the sites has blocked proxy"
        except Exception as e:
            # Too many open files
            if isinstance(e, OSError) and e.errno == 24:
                self.c.print(
                    "[red]Please, set MAX_CONNECTIONS to lower value."
                )

            self.proxies[proto].remove(proxy)
        else:
            proxy.timeout = perf_counter() - start
        progress.update(task, advance=1)

    async def fetch_all_sources(self) -> None:
        with self._progress as progress:
            tasks = {
                proto: progress.add_task(
                    f"[yellow]Scraper [red]:: [green]{proto.upper()}",
                    total=len(sources),
                )
                for proto, sources in self.sources.items()
            }
            async with ClientSession() as session:
                coroutines = (
                    self.fetch_source(
                        session, source, proto, progress, tasks[proto]
                    )
                    for proto, sources in self.sources.items()
                    for source in sources
                )
                await asyncio.gather(*coroutines)

        # Remember total count so we could print it in the table
        for proto, proxies in self.proxies.items():
            self.proxies_count[proto] = len(proxies)

    async def check_all_proxies(self) -> None:
        with self._progress as progress:
            tasks = {
                proto: progress.add_task(
                    f"[yellow]Checker [red]:: [green]{proto.upper()}",
                    total=len(proxies),
                )
                for proto, proxies in self.proxies.items()
            }
            coroutines = [
                self.check_proxy(proxy, proto, progress, tasks[proto])
                for proto, proxies in self.proxies.items()
                for proxy in proxies
            ]
            shuffle(coroutines)
            await asyncio.gather(*coroutines)

    def save_proxies(self) -> None:
        """Delete old proxies and save new ones."""
        sorted_proxies = self.sorted_proxies.items()
        for folder in self.all_folders:
            folder.remove()
        for folder in self.enabled_folders:
            folder.create()
            for proto, proxies in sorted_proxies:
                text = "\n".join(
                    "{}".format(
                        proxy.socket_address
                    )
                    for proxy in proxies
                    if True
                )
                (folder.path / f"{proto}.txt").write_text(
                    text, encoding="utf-8"
                )

    async def main(self) -> None:
        await self.fetch_all_sources()
        await self.check_all_proxies()

        table = Table()
        table.add_column("Protocol", style="cyan")
        table.add_column("Working", style="magenta")
        table.add_column("Total", style="green")
        for proto, proxies in self.proxies.items():
            working = len(proxies)
            total = self.proxies_count[proto]
            percentage = working / total * 100 if total else 0
            table.add_row(
                proto.upper(), f"{working} ({percentage:.1f}%)", str(total)
            )
        self.c.print(table)

        self.save_proxies()
        self.c.print(
            "[green]Proxy folders have been created in the "
            + f"{self.path.absolute()} folder."
        )

    @property
    def sorted_proxies(self) -> Dict[str, List[Proxy]]:
        key = self._sorting_key
        return {
            proto: sorted(proxies, key=key)
            for proto, proxies in self.proxies.items()
        }

    @property
    def _sorting_key(
            self,
    ) -> Union[Callable[[Proxy], float], Callable[[Proxy], Tuple[int, ...]]]:
        if self.sort_by_speed:
            return lambda proxy: proxy.timeout
        return lambda proxy: tuple(
            map(int, proxy.socket_address.replace(":", ".").split("."))
        )

    @property
    def _progress(self) -> Progress:
        return Progress(
            TextColumn("[progress.description]{task.description}"),
            BarColumn(),
            TextColumn("[progress.percentage]{task.percentage:3.0f}%"),
            TextColumn("[blue][{task.completed}/{task.total}]"),
            TimeRemainingColumn(compact=True),
            console=self.c,
        )


async def main() -> None:
    await ProxyScraperChecker(
        timeout=config.TIMEOUT,
        max_connections=config.MAX_CONNECTIONS,
        sort_by_speed=config.SORT_BY_SPEED,
        save_path=config.SAVE_PATH,
        proxies=config.PROXIES,
        http_sources=config.HTTP_SOURCES
        if config.HTTP and config.HTTP_SOURCES
        else None,
        socks4_sources=config.SOCKS4_SOURCES
        if config.SOCKS4 and config.SOCKS4_SOURCES
        else None,
        socks5_sources=config.SOCKS5_SOURCES
        if config.SOCKS5 and config.SOCKS5_SOURCES
        else None,
        validation_targets=config.VALIDATION_TARGETS
    ).main()


if __name__ == "__main__":
    asyncio.run(main())
