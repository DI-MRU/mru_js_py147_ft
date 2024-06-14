import express from "express";
import bodyParser from "body-parser";

// Create an express application
const app = express();

// Use the body-parser middleware with the express app
app.use(bodyParser.json());

// data array to store the username , password and id
const data = [];
// id variable to assign id to the username
let i = 1;

// get all
app.get("/", function (req, res) {
  // send the data array as response
  try {
    res.status(200).send({ message: "successfull", data: data });
  } catch (err) {
    res.status(500).send({ message: "an error has occured" });
  }
});

//get by id
app.get("/:id", (req, res) => {
  // get the id from the request
  const id = req.params.id;
  const username = data.find((username) => username.id == id);
  if (username) {
    res.send(username);
  } else {
    res.send({ message: "username not found" });
  }
});

//put
app.put("/:id", (req, res) => {
  // get the id from the request
  const id = req.params.id;
  // find the username with the id
  const username = data.find((username) => username.id == id);
  // if the username is found then update the username and password
  if (username) {
    const index = data.findIndex((username) => username.id == id);
    const { username, password } = req.body;
    data[index] = { id, username, password };
    res.send({ message: "successful" });
  } else {
    res.send({ message: "username not found" });
  }
});

// delete
app.delete("/:id", (req, res) => {
  const id = req.params.id;
  const index = data.findIndex((username) => username.id == id);
  if (index != -1) {
    data.splice(index, 1);
    res.send({ message: "successful" });
  }
  res.send({ message: "username not found" });
});

//  Post
app.post("/", (req, res) => {
  const { username, password } = req.body;
  const id = i++;
  try {
    data.push({ id, username, password });
    res.status(200).send({ message: "successful", data: data });
  } catch (err) {
    res.status(500).send({ message: "an error has occured" });
  }
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
