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

  console.log(Jerusalem);
  await browser.close();
})();
