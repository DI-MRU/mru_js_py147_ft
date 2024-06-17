const express = require("express");
const db = require("../../config/index");

const router = express.Router();

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  db("posts")
    .where({ id })
    .update({ title, content })
    .then(() => {
      res.send({ message: "Post updated successfully" });
    });
});

module.exports = router;
