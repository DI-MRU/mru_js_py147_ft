const express = require("express");
const db = require("../../config/index");

const router = express.Router();

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db("posts")
    .where({ id })
    .del()
    .then(() => {
      res.send({ message: "Post deleted successfully" });
    });
});

module.exports = router;