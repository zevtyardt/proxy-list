const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const out = fs.createWriteStream("../../proxy.csv");
const main = async () => {
  const req = await axios.get("https://scrapingant.com/proxies");

  const $ = cheerio.load(req.data);
  const dt = $("tr")
    .toArray()
    .map((v) => $(v).text().trim().split(/\n */));

  dt.forEach((value) => {
    out.write(value.join(",") + "\n");
  });
};

main();
