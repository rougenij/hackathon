const express = require("express");
const Site = require("../models/site.model");

const addSite = async (req, res) => {
  try {
    const site = await new Site(req.body);
    await site.save();
    res
      .status(201)
      .send({ status: "success", message: "User has been created" });
  } catch (err) {
    res
      .status(400)
      .send({ status: "failed", message: "Failed to create user" });
  }
};

module.exports = { addSite };
