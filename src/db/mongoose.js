const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;

mongoose.connect(`mongodb+srv://admin_1:${password}@test.99q0a.mongodb.net/CulTour?retryWrites=true&w=majority
`);
