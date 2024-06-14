const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/index");

// Create the express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

module.exports = app;
