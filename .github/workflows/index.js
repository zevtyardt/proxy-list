const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const PATH = "../..";
const extract_table = (selector, data) => {
  const $ = cheerio.load(data);
  const table = $(selector);
  const head = table
    .find("thead")
    .find("th")
    .toArray()
    .map((e) => $(e).text().trim());
  const body = table
    .find("tbody")
    .find("tr")
    .toArray()
    .map((tr) =>
      $(tr)
        .find("td")
        .toArray()
        .map((td) => $(td).text().trim())
    );
  return {
    header: head,
    body: body,
    key: 4,
  };
};

// providers
const scrapingant = async () => {
  const req = await axios.get("https://scrapingant.com/proxies");

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
  const req = await axios.get("https://www.socks-proxy.net/");
  return extract_table(".table-striped", req.data);
};

const free_proxy_list = async () => {
  const req = await axios.get("https://free-proxy-list.net/");
  const data = extract_table(".table-striped", req.data);
  data.key = "HTTP";
  return data;
};

const proxyscrape = async () => {
  const data = [];
  for (let proto of ["http", "socks4", "socks5"]) {
    const req = await axios.get(
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

fs.mkdir(`${PATH}/csv`, () => {});

const main = async () => {
  const filtered = new Set();
  const outs = {};
  for (let provider of [
    scrapingant,
    socks_proxy_net,
    free_proxy_list,
    proxyscrape,
  ]) {
    console.log(`> get_proxies from ${provider.name}`);
    const result = await provider();
    result.body.forEach((value) => {
      const type =
        typeof result.key == "string"
          ? result.key.toLowerCase()
          : value[result.key].toLowerCase();
      if (!outs[type]) {
        outs[type] = {
          csv: fs.createWriteStream(
            `${PATH}/csv/${type}_proxy-${provider.name}.csv`
          ),
          raw: fs.createWriteStream(`${PATH}/${type}_proxy.txt`),
        };
        outs[type].csv.write(result.header.join(",") + "\n");
      }

      const proxy = `${value[result.ip || 0]}:${value[result.port || 1]}`;
      if (filtered.has(proxy)) return;
      outs[type].raw.write(proxy + "\n");
      outs[type].csv.write(value.join(",") + "\n");
      filtered.add(proxy);
    });
    console.log(`< done write ${result.body.length} proxies`);
  }
};

main();
