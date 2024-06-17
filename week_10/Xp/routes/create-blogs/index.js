const express = require("express");
const db = require("../../config/index");

const router = express.Router();

router.post("/", (req, res) => {
  const { title, content } = req.body;
  db("posts")
    .insert({ title, content })
    .then(() => {
      res.send({ message: "Post added successfully" });
    });
});

module.exports = router;
