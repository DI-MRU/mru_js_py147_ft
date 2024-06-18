const express = require("express");
const db = require("../../config/index");

const router = express.Router();

router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.select("*")
    .from("posts")
    .where({ id })
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
