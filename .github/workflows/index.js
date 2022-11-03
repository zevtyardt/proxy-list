const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const PATH = "../..";

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

  const $ = cheerio.load(req.data);
  const table = $(".table-striped");
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

fs.mkdir(`${PATH}/csv`, () => {});

const main = async () => {
  const outs = {};
  for (let provider of [scrapingant, socks_proxy_net]) {
    console.log(`> get_proxies from ${provider.name}`);
    const result = await provider();
    result.body.forEach((value) => {
      const type = value[result.key].toLowerCase();
      if (!outs[type]) {
        outs[type] = {
          csv: fs.createWriteStream(
            `${PATH}/csv/${type}_proxy-${provider.name}.csv`
          ),
          raw: fs.createWriteStream(`${PATH}/${type}.txt`),
        };
        outs[type].csv.write(result.header.join(",") + "\n");
      }
      outs[type].raw.write(
        `${value[result.ip || 0]}:${value[result.port || 1]}\n`
      );
      outs[type].csv.write(value.join(",") + "\n");
    });
    console.log(`< done write ${result.body.length} proxies`);
  }
};

main();
