const puppeteer = require("puppeteer");
const express = require("express");
const Site = require("../models/site.model");

const url =
  "https://www.planetware.com/tourist-attractions-/nablus-isr-wb-nab.htm";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const nablus = await page.evaluate(() => {
    try {
      const nameArr = [];
      for (let i = 0; i < document.querySelectorAll(".sitename").length; i++) {
        nameArr.push({
          location: "Nablus",
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
  console.log(nablus);
  //Needs to be Automated to add data
  const deadSeaCollection = async () => {
    try {
      deadSeaArr.forEach(async (location) => {
        const deadSea = await new Site(location);
        await deadSea.save();
      });
      // res.status(200).send("Dead Sea has been Added to DB");
    } catch (err) {
      // res.status(400).send({ status: "failed", message: "Failed to Fetch Data" });
      console.log(err.message);
    }
  };

  deadSeaCollection();

  await browser.close();
})();
