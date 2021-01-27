const puppeteer = require("puppeteer");
const fs = require("fs");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url = "https://example.com";
  await page.goto(url, { waitUntil: "networkidle2" });
  await page.waitFor(5000);

  const html = await page.content();
  fs.writeFileSync("example.html", html);

  await browser.close();
};
main();
