const express = require("express");
const db = require("../../config/index");

const router = express.Router();

router.get("/", (req, res) => {
  db.select("*")
    .from("posts")
    .then((data) => {
      res.send(data);
    });
});

module.exports = router;
