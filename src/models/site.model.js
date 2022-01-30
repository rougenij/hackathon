const mongoose = require("mongoose");

const siteSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    //Name of the location, for example -> Haifa, Tel Aviv, Eilat...etc
  },
  name: {
    type: String,
    required: true,
    //Name of the place we want to pick for example -> Bahai gardens
  },
  category: {
    type: String,
    required: true,
    // What type of place this is, religion, history, culture
  },
  description: {
    type: String,
    required: true,
    //Description of the place
  },
  image: {
    type: String,
    required: true,
  },
});

const Site = mongoose.model("Site", siteSchema);
module.exports = Site;
