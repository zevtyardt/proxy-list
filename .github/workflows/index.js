const axios = require("axios");
const cheerio = require("cheerio");
const https = require("https");
const fs = require("fs");

const PATH = "../..";
const extract_table = (selector, data, custom_cb) => {
  const $ = cheerio.load(data);
  const table = $(selector);
  const head = table
    .find("thead")
    .find("th")
    .toArray()
    .map((e) => $(e).text().trim().replace(/\s+/gis, " "));
  const body = table
    .find("tbody")
    .find("tr")
    .toArray()
    .map((tr) => {
      if (custom_cb) return custom_cb($, tr);

      return $(tr)
        .find("td")
        .toArray()
        .map((td) => $(td).text().trim().replace(/\s+/gis, " "));
    })
    .filter((v) => v.length > 0);
  return {
    header: head,
    body: body,
    key: 4,
  };
};

const extract_proxy_list = (data, type) => {
  return {
    header: ["Ip", "Port", "Type"],
    body: data
      .split(/\r?\n/)
      .filter((v) => v.match(/(?:\d+\.?){4}\s*:\s*\d+/))
      .map((value) => [...value.trim().split(/\s*:\s*/), type.toUpperCase()]),
    key: 2,
  };
};

const axios_get = async (...args) => {
  try {
    return await axios.get(...args);
  } catch (err) {
    return err.response;
  }
};
// providers

const proxyscan = async function* () {
  const req = await axios_get("https://www.proxyscan.io/", {
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
  });
  yield extract_table(".table", req.data, ($, tr) => [
    $(tr).find("th").text().trim(),
    ...$(tr)
      .find("td")
      .toArray()
      .map((td) => $(td).text().trim().replace(/\s+/gis, " ")),
  ]);

  for (let type of ["http", "https", "socks4", "socks5"]) {
    let req = await axios_get(`https://www.proxyscan.io/download?type=${type}`);
    yield extract_proxy_list(req.data, type);

    req = await axios_get(
      `https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/${type}.txt`
    );
    yield extract_proxy_list(req.data, type);
  }
};

const github_raw = async function* () {
  for (let type of ["http", "https", "socks4", "socks5"]) {
    const req = await axios.get(
      `https://raw.githubusercontent.com/ShiftyTR/Proxy-List/master/${type}.txt`
    );
    yield extract_proxy_list(req.data, type);
  }
};

const api_openproxylist = async function* () {
  for (let type of ["http", "socks4", "socks5"]) {
    const req = await axios_get(`https://api.openproxylist.xyz/${type}.txt`);
    yield extract_proxy_list(req.data, type);
  }
};

const scrapingant = async () => {
  const req = await axios_get("https://scrapingant.com/proxies");

  const $ = cheerio.load(req.data);
  const dt = $("tr")
    .toArray()
    .map((v) => $(v).text().trim().split(/\n */));

  return {
    header: dt.shift(),
    body: dt,
    key: 2,
  };
};

const socks_proxy_net = async () => {
  const req = await axios_get("https://www.socks-proxy.net/");
  return extract_table(".table-striped", req.data);
};

const us_proxy = async () => {
  const req = await axios_get("https://us-proxy.org/");
  return extract_table(".table-striped", req.data);
};

const sslproxies = async () => {
  const req = await axios_get("https://www.sslproxies.org/");
  const data = extract_table(".table-striped", req.data);
  data.key = "HTTP";
  return data;
};

const free_proxy_list = async () => {
  const req = await axios_get("https://free-proxy-list.net/");
  const data = extract_table(".table-striped", req.data);
  data.key = "HTTP";
  return data;
};

const proxyscrape = async () => {
  const data = [];
  for (let proto of ["http", "socks4", "socks5"]) {
    const req = await axios_get(
      `https://api.proxyscrape.com/v2/?request=displayproxies&protocol=${proto}}&timeout=10000&country=all&ssl=all&anonymity=all`
    );
    const lines = req.data.split(/\r?\n/);
    for (let line of lines) {
      if (line.indexOf(":") < 0) continue;
      data.push([...line.trim().split(/\s*:\s*/), proto.toUpperCase()]);
    }
  }
  return {
    header: ["Ip", "Port", "Protocol"],
    body: data,
    key: 2,
  };
};

const proxynova = async () => {
  const req = await axios_get("https://api.proxynova.com/proxylist");
  const data = [];
  for (let dt of req.data.data || []) {
    dt.ip = eval(dt.ip);
    data.push([
      dt.ip,
      dt.port,
      `${dt.countryCode} ${dt.countryName} ${dt.cityName}`,
      dt.hostname,
      dt.asn,
    ]);
  }

  return {
    header: ["Ip", "Port", "Country", "Hostname", "ASN"],
    body: data,
    key: "HTTP",
  };
};

const hidemy = async function* (numPage = 20) {
  const origin = "https://hidemy.name";

  let path = "/en/proxy-list";
  for (let i = 0; i < numPage; i++) {
    if (!path) break;
    const req = await axios_get(origin + path);
    yield extract_table("table", req.data);

    path = cheerio.load(req.data)("li.next_array").find("a")[0]?.attribs?.href;
  }
};

const freeproxy_world = async function* (numPage = 20) {
  for (let i = 0; i < numPage; i++) {
    const req = await axios_get(
      `https://freeproxy.world/?type=&anonymity=&country=&speed=&port=&page=${i}`
    );
    const data = extract_table("table", req.data);
    data.key = 5;
    yield data;
  }
};

const proxylist_org = async function* () {
  let page = 1;
  while (true) {
    const req = await axios_get(
      `https://proxy-list.org/english/index.php?p=${page}`
    );
    const $ = cheerio.load(req.data);

    const table = $(".proxy-table");
    const head = table
      .find(".header-row")
      .find("li")
      .toArray()
      .map((e) => $(e).text().trim().replace(/\s+/gis, " "));

    const body = table
      .find(".table")
      .find("ul")
      .toArray()
      .map((ul) => {
        const dt = $(ul)
          .find("li")
          .toArray()
          .map((td) => $(td).text().trim().replace(/\s+/gis, " "));
        const [ip, port] = Buffer.from(
          dt.shift().match(/["']([^"']+)/)[1],
          "base64"
        )
          .toString()
          .split(":");
        dt.splice(0, 0, ip, port);
        return dt;
      })
      .filter((v) => v.length > 0);

    head.shift();
    head.splice(0, 0, "Ip", "Port");

    if (body.length < 1) break;

    yield {
      header: head,
      body: body,
      key: 4,
    };
    page++;
  }
};

const iplocation = async function* () {
  let page = 0;
  while (true) {
    const req = await axios_get(
      `https://www.iplocation.net/proxy-list/index/${page}`
    );
    const $ = cheerio.load(req.data);

    const table = $("table");
    const head = table
      .find("thead")
      .find("th")
      .toArray()
      .map((e) => $(e).text().trim().replace(/\s+/gis, " "))
      .splice(0, 4);

    const body = table
      .find("tbody")
      .find("tr")
      .toArray()
      .map((tr) =>
        $(tr)
          .find("td")
          .toArray()
          .map((e) => $(e).text().trim().replace(/\s+/gis, " "))
          .splice(0, 4)
      )
      .filter((v) => v.length > 0);
    if (body.length < 1) break;
    yield {
      header: head,
      body: body,
      key: "HTTP",
    };
    page = page + 10;
  }
};

const my_proxy = async () => {
  const req = await axios_get("https://www.my-proxy.com/free-proxy-list.html");
  return {
    header: ["Ip", "Port", "Country Code"],
    body: [
      ...req.data.matchAll(
        /(?<ip>(?:\d+\.?){4}):(?<port>\d+)#(?<country>[A-Z]+)/gi
      ),
    ].map((v) => Object.values(v.groups)),
    key: "HTTP",
  };
};
// MAIN

fs.mkdir(`${PATH}/csv/`, () => {});

const main = async () => {
  const unique = {};
  let total = 0;
  const outs = {};
  for (let raw_provider of [
    my_proxy,
    iplocation,
    proxylist_org,
    proxynova,
    api_openproxylist,
    freeproxy_world,
    us_proxy,
    sslproxies,
    proxyscrape,
    scrapingant,
    github_raw,
    socks_proxy_net,
    free_proxy_list,
    proxyscan,
    hidemy,
  ]) {
    let provider;
    if (!raw_provider.constructor.name.startsWith("AsyncGen"))
      provider = async function* () {
        yield await raw_provider();
      };
    else provider = raw_provider;
    console.log(`> get_proxies from ${raw_provider.name}`);

    const generator = provider();
    while (true) {
      try {
        const { value: result, done } = await generator.next();
        if (!result && done) break;

        result.body.forEach((value) => {
          if (value.length != result.header.length) return;

          const types = (
            typeof result.key == "string"
              ? result.key.toLowerCase()
              : value[result.key].toLowerCase()
          ).replace(/\s*proxy\s*/, "");

          for (let type of types.split(/\s*,\s*/)) {
            if (typeof result.key != "string") value[result.key] = type;

            if (!outs[type]) {
              unique[type] = new Set();
              outs[type] = {
                csv: fs.createWriteStream(
                  `${PATH}/csv/${type}_proxy-${provider.name}.csv`
                ),
                raw: fs.createWriteStream(`${PATH}/${type}_proxy.txt`),
              };
              outs[type].csv.write(result.header.join(",") + "\n");
            }

            outs[type].csv.write(value.join(",") + "\n");
            const proxy = `${value[result.ip || 0]}:${value[result.port || 1]}`;
            if (unique[type].has(proxy)) return;
            outs[type].raw.write(proxy + "\n");
            unique[type].add(proxy);
            total++;
          }
        });
        console.log(`< done write ${result.body.length} proxies`);
      } catch (_) {
        console.log("! failed scrape proxy");
        console.error(_);
      }
    }
  }
  console.log(`< total proxy: ${total}`);
};

main();
