const express = require("express");
const Site = require("../models/site.model");

const getSitesByCityName = async (req, res) => {
  // After clicking explore we get this request
  // Return The Obj from puppeteer
  // name,location,catergoy,image,description
};

const getAllCities = async (req, res) => {
  //Ahmad Page (Coursel)
  // Returns City name and Image, and City Description
};

module.exports = {
  getSitesByCityName,
  getAllCities,
};
