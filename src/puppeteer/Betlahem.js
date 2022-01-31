const puppeteer = require("puppeteer");
const express = require("express");
const Site = require("../models/site.model");

const url =
  "https://www.planetware.com/tourist-attractions-/bethlehem-isr-wb-b.htm";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const Betlehem = await page.evaluate(() => {
    try {
      const nameArr = [];
      for (let i = 0; i < document.querySelectorAll(".sitename").length; i++) {
        nameArr.push({
          location: "BetLehem",
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
    console.log(Betlehem);
  });
  //Needs to be Automated to add data
  const BethlehemCollection = async () => {
    try {
      Betlehem.forEach(async (location) => {
        const bethlehem = await new Site(location);
        await bethlehem.save();
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  BethlehemCollection();

  await browser.close();
})();
