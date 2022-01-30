const puppeteer = require("puppeteer");

const url =
  "https://www.planetware.com/tourist-attractions-/dead-sea-isr-st-ds.htm";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const name = await page.evaluate(() => {
    try {
      const nameArr = [];
      for (let i = 0; i < document.querySelectorAll(".sitename").length; i++) {
        nameArr.push({
          location: "Dead Sea",
          category: "Culture",
          name: document.querySelectorAll(".sitename")[i].innerText,
          description: document.querySelectorAll(".site_desc")[i].innerText,
          image: document.querySelectorAll(".wp-block-image img")[i].src,
        });
      }
      return nameArr;
    } catch (err) {
      console.log(err.message);
    }
  });

  //   const description = await page.evaluate(() => {
  //     const descArr = [];
  //     for (let i = 0; i < document.querySelectorAll(".site_desc").length; i++) {
  //       descArr.push(document.querySelectorAll(".site_desc")[i].innerText);
  //     }
  //     return descArr;
  //   });

  //   const images = await page.evaluate(() => {
  //     const imgArr = [];
  //     for (
  //       let i = 0;
  //       i < document.querySelectorAll(".wp-block-image img").length;
  //       i++
  //     ) {
  //       imgArr.push(document.querySelectorAll(".wp-block-image img")[i].src);
  //     }
  //     return imgArr;
  //   });

  console.log("name: ", name);
  //   console.log("desc: ", description);
  //   console.log("img: ", images);

  await browser.close();
})();
