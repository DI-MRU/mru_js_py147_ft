const express = require("express");
const database = require("../../config/index");

const router = express.Router();

router.post("/", (req, res) => {
  const { title, author, publishedyear } = req.body;
  database("books")
    .insert({ title, author, publishedyear })
    .then(() => {
      res.send({ message: "successful" });
    });
});

module.exports = router;
