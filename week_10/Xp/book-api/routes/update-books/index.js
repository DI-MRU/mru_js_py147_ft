const express = require("express");
const database = require("../../config/index");

const router = express.Router();

router.put("/:id", (req, res) => {
  const id = req.params;
  const { title, author, publishedyear } = req.body;
  database("books")
    .where(id)
    .update({
      title,
      author,
      publishedyear,
    })
    .then(() => {
      res.send({
        message: "Successful",
      });
    });
});

module.exports = router;
