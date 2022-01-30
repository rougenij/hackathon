const express = require("express");
const Site = require("../models/site.model");
const cities = require("../db/cities.json");

const getSitesByCityName = async (req, res) => {
  try {
    const cityName = req.params.city;
    const city = await Site.find({ location: cityName });
    if (!city) return res.status(400).send("No City with this name");
    res.status(200).send(city);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }

  // After clicking explore we get this request
  // Return The Obj from puppeteer
  // name,location,catergoy,image,description
};

const getAllCities = async (req, res) => {
  try {
    res.status(200).send(cities);
  } catch (err) {
    res.status(400).send({ err: err.message });
  }
};

module.exports = {
  getSitesByCityName,
  getAllCities,
};
