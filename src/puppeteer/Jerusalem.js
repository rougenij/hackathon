const puppeteer = require("puppeteer");
const express = require("express");
const Site = require("../models/site.model");

const url =
  "https://www.planetware.com/tourist-attractions-/jerusalem-isr-jr-j.htm";
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const Jerusalem = await page.evaluate(() => {
    try {
      const nameArr = [];
      for (let i = 0; i < document.querySelectorAll(".sitename").length; i++) {
        nameArr.push({
          location: "Jerusalem",
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

  //Needs to be Automated to add data
  const JerusalemCollections = async () => {
    try {
      HaifaArr.forEach(async (location) => {
        const Haifa = await new Site(location);
        await Haifa.save();
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  HaifaCollection();

  await browser.close();
})();
