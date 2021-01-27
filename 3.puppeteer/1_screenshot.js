const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let url = "https://google.com";
  await page.goto(url);
  await page.screenshot({ path: "screenshot.png" });
  await browser.close();
};
main();
