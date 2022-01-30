const puppeteer = require("puppeteer");
const url =
  "https://www.planetware.com/tourist-attractions-/dead-sea-isr-st-ds.htm";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      name: document.querySelectorAll(".sitename")[2].innerText,
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio,
    };
  });

  console.log("Dimensions:", dimensions);

  await browser.close();
})();
