const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/index");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", router);

module.exports = app;
