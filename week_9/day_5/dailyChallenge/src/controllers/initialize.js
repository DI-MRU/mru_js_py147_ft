const fs = require("fs");
const taskPath = require("../utils/taskPath");

// Create an empty array to represent tasks
const initialTasks = [];

// Write the empty array to the tasks.json file
const initialize = () => {
  fs.writeFileSync(taskPath, JSON.stringify(initialTasks, null, 2));
};

module.exports = initialize;
