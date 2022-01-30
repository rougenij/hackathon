const express = require("express");
const {
  getSitesByCityName,
  getAllCities,
} = require("../controllers/site.controller");

// API ROUTER
const siteRouter = express.Router();

siteRouter.get("/cities", getAllCities);
siteRouter.get("/cities/:city", getSitesByCityName);

module.exports = siteRouter;
