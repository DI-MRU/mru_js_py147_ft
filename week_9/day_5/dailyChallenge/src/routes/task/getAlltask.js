const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("../../utils/taskPath");

router.get("/", (req, res) => {
  fs.readFile(taskPath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send({ message: "Internal Server Error" });
    } else {
      res.status(200).send({ message: "Success", data: JSON.parse(data) });
    }
  });
});

module.exports = router;
