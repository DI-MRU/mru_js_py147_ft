const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("../../utils/taskPath");

router.post("/", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).send({ message: "Please provide a title and description" });
  }

  try {
    fs.readFile(taskPath, "utf8", (err, data) => {
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        const tasks = JSON.parse(data);
        const id = tasks.length + 1;
        const newTask = { id, title, description };
        tasks.push(newTask);
        fs.writeFileSync(taskPath, JSON.stringify(tasks, null, 2));
        res
          .status(200)
          .send({ message: "Task added successfully", data: newTask });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
