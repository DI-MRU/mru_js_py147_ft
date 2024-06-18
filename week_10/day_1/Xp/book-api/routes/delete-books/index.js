const express = require("express");
const database = require("../../config/index");

const router = express.Router();

router.delete("/:id", (req, res) => {
  const id = req.params;
  database("books")
    .where(id)
    .del()
    .then(() => {
      res.send({ message: "successful" });
    });
});

module.exports = router;