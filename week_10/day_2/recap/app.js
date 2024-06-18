import express from "express";

const app = express();
app.use(express.json());

const data = [];
let i = 0;

app.get("/", (req, res) => {
  res.send({ message: "HELLO WORLD" });
});
// get "/data"
app.get("/data", (req, res) => {
  res.send(data);
});

// post "/data"
app.post("/data", (req, res) => {
  const { name } = req.body;
  const id = i++;
  data.push({ name, id });
  res.send({ data: data });
});

app.get("/data/:id", (req, res) => {
  const id = req.params.id;
  const name = data.find((name) => name.id == id);
  if (name) {
    res.send(name);
  } else {
    res.send({ message: "not found" });
  }
});

app.put("/data/:id", (req, res) => {
  const id = req.params.id;
  const user = data.find((name) => name.id == id);

  if (user) {
    const test = data.findIndex((name) => {
      name.id == id;
    });
    const { name } = req.body;
    data[test] = { id, name };
    res.send({ message: "successful" });
  } else {
    res.send({ message: "name not found" });
  }
});

app.listen(3000, () => {
  console.log("this server is running");
});
