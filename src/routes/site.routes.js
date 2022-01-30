const express = require("express");
const { addSite, getAllSites } = require("../controllers/site.controller");

// API ROUTER
const siteRouter = express.Router();

siteRouter.get("/", getAllSites);

siteRouter.post("/sites", addSite);

module.exports = siteRouter;
