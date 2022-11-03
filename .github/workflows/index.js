const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const main = async () => {
  const req = await axios.get("https://scrapingant.com/proxies");

  const $ = cheerio.load(req.data);
  const dt = $("tr")
    .toArray()
    .map((v) => $(v).text().trim().split(/\n */));

  const header = dt.shift();
  const outs = {};

  dt.forEach((value) => {
    const type = value[2].toLowerCase();
    if (!outs[type]) {
      outs[type] = fs.createWriteStream(`.../../${type}_proxy.txt`);
      outs[type].write(header.join(",") + "\n");
    }

    outs[type].write(value.join(",") + "\n");
  });
};

main();
