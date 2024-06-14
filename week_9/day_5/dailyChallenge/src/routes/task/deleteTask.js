const express = require("express");
const router = express.Router();
const fs = require("fs");
const taskPath = require("../../utils/taskPath");

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  try {
    fs.readFile(taskPath, "utf8", (err, data) => {
      if (err) {
        res.status(500).send({ message: "Internal Server Error" });
      } else {
        const tasks = JSON.parse(data);
        const taskIndex = tasks.findIndex((task) => task.id == id);

        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          fs.writeFileSync(taskPath, JSON.stringify(tasks, null, 2));
          res.status(200).send({ message: "Task deleted successfully" });
        } else {
          res.status(404).send({ message: "Task not found" });
        }
      }
    });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
