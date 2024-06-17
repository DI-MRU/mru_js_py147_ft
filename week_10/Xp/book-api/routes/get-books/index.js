const express = require("express");
const database = require("../../config/index");

const router = express.Router();

router.get("/", function (req, res) {
  database
    .select("*")
    .from("books")
    .then((books) => res.send(books));
});

module.exports = router;