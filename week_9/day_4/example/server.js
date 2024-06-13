const express = require("express");
const app = express();

// set the view engine to ejs
// sets EJS as the view engine for the Express application
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // The render method takes the name of the HTML
  // page to be rendered as input
  // This page should be in the views folder
  // in the root directory.
  res.render("home"); //renders the home.ejs file
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
