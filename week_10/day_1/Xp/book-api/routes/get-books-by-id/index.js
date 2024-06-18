const express = require("express");
const database = require("../../config/index");

const router = express.Router();

router.get("/:id", (req, res) => {
  const id = req.params;
  database
    .select("*")
    .from("books")
    .where(id)
    .then((books) => {
      res.send(books);
    });
});

module.exports = router;
