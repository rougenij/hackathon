const express = require("express");
const { addSite } = require("../controllers/site.controller");

// API ROUTER
const siteRouter = express.Router();

siteRouter.post("/sites", addSite);

module.exports = siteRouter;
