# -*- coding: utf-8 -*-
import os

# How many seconds to wait for the proxy to make a connection.
# The higher this number, the longer the check will take
# and the more proxies you will receive.
TIMEOUT = 6

# Maximum concurrent connections.
# Don't set higher than 900, please.
MAX_CONNECTIONS = 900

# Set to False to sort proxies alphabetically.
SORT_BY_SPEED = True

# Path to the folder where the proxy folders will be saved.
# Leave the quotes empty to save the proxies to the current directory.
SAVE_PATH = ""

# Enable which proxy folders to create.
# Set to False to disable.

# Proxies with any anonymity level.
PROXIES = True


# PROTOCOL - whether to enable checking certain protocol proxies (True or False).
# PROTOCOL_SOURCES - proxy lists URLs.
HTTP = True
HTTP_SOURCES = (
    "http://proxysearcher.sourceforge.net/Proxy%20List.php?type=http",
    "http://worm.rip/http.txt",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http",
    "https://openproxy.space/list/http",
    "https://openproxylist.xyz/http.txt",
    "https://proxyspace.pro/http.txt",
    "https://proxyspace.pro/https.txt",
    "https://raw.githubusercontent.com/almroot/proxylist/master/list.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/HTTP.txt",
    "https://raw.githubusercontent.com/clarketm/proxy-list/master/proxy-list-raw.txt",
    "https://raw.githubusercontent.com/hendrikbgr/Free-Proxy-Repo/master/proxy_list.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-http.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-https.txt",
    "https://raw.githubusercontent.com/mertguvencli/http-proxy-list/main/proxy-list/data.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/http.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/https.txt",
    "https://raw.githubusercontent.com/proxy4parsing/proxy-list/main/http.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/HTTPS_RAW.txt",
    "https://raw.githubusercontent.com/RX4096/proxy-list/main/online/http.txt",
    "https://raw.githubusercontent.com/RX4096/proxy-list/main/online/https.txt",
    "https://raw.githubusercontent.com/saschazesiger/Free-Proxies/master/proxies/http.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/http.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/https.txt",
    "https://raw.githubusercontent.com/sunny9577/proxy-scraper/master/proxies.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt",
    "https://rootjazz.com/proxies/proxies.txt",
    "https://sheesh.rip/http.txt",
    "https://spys.me/proxy.txt",
    "https://www.freeproxychecker.com/result/http_proxies.txt",
    "https://www.proxy-list.download/api/v1/get?type=http",
    "https://www.proxy-list.download/api/v1/get?type=https",
    "https://www.proxyscan.io/download?type=http",
    os.getenv('PROXY11_URL'),
)
SOCKS4 = True
SOCKS4_SOURCES = (
    "http://proxysearcher.sourceforge.net/Proxy%20List.php?type=socks",
    "http://worm.rip/socks4.txt",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks4",
    "https://openproxy.space/list/socks4",
    "https://openproxylist.xyz/socks4.txt",
    "https://proxyspace.pro/socks4.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/SOCKS4.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks4.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/socks4.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/SOCKS4_RAW.txt",
    "https://raw.githubusercontent.com/saschazesiger/Free-Proxies/master/proxies/socks4.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks4.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks4.txt",
    "https://www.freeproxychecker.com/result/socks4_proxies.txt",
    "https://www.proxy-list.download/api/v1/get?type=socks4",
    "https://www.proxyscan.io/download?type=socks4"
)
SOCKS5 = True
SOCKS5_SOURCES = (
    "http://proxysearcher.sourceforge.net/Proxy%20List.php?type=socks",
    "http://worm.rip/socks5.txt",
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=socks5",
    "https://openproxy.space/list/socks5",
    "https://openproxylist.xyz/socks5.txt",
    "https://proxyspace.pro/socks5.txt",
    "https://raw.githubusercontent.com/B4RC0DE-TM/proxy-list/main/SOCKS5.txt",
    "https://raw.githubusercontent.com/hookzof/socks5_list/master/proxy.txt",
    "https://raw.githubusercontent.com/jetkai/proxy-list/main/online-proxies/txt/proxies-socks5.txt",
    "https://raw.githubusercontent.com/manuGMG/proxy-365/main/SOCKS5.txt",
    "https://raw.githubusercontent.com/mmpx12/proxy-list/master/socks5.txt",
    "https://raw.githubusercontent.com/roosterkid/openproxylist/main/SOCKS5_RAW.txt",
    "https://raw.githubusercontent.com/saschazesiger/Free-Proxies/master/proxies/socks5.txt",
    "https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/socks5.txt",
    "https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/socks5.txt",
    "https://www.freeproxychecker.com/result/socks5_proxies.txt",
    "https://www.proxy-list.download/api/v1/get?type=socks5",
    "https://www.proxyscan.io/download?type=socks5"
)

VALIDATION_TARGETS = [
    "https://gogoanime.lu",
    "https://zoro.to"
]
