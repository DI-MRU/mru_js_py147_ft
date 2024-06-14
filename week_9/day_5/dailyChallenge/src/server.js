const app = require("./app");
const initialize = require("./controllers/initialize");

// Initialize the tasks.json file
initialize();

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
