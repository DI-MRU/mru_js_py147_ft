const express = require("express");
const app = express();
require("dotenv").config();
// CRUD
const db = require("knex")({
  client: "pg",
  connection: {
    host: process.env.LOCALHOST || "",
    user: process.env.USER || "",
    password: process.env.PASSWORD || "",
    database: process.env.DATABASE || "",
    port: process.env.PORT || 5432,
  },
});

app.set("db", db);
// Middleware
app.use(express.json());

app.get("/", (req, res) => {
  // SELECT * FROM actors
  db.select("*")
    .from("actors")
    .then((actors) => res.send(actors));
});

app.get("/:actor_id", (req, res) => {
  const { actor_id } = req.params;
  // SELECT * from actors WHERE actor_id={anyIdNumberThatExists} e.g. 1
  db.select("*")
    .from("actors")
    .where({ actor_id })
    .then((actor) => res.send(actor));
});

// INSERT INTO actors(first_name,last_name,birthdate,number_oscars,is_active) VALUES('bob','paul','2024-01-01', 100 ,true);

app.post("/", (req, res) => {
  const { first_name, last_name, birthdate, number_oscars, is_active } =
    req.body;
  db.insert({
    first_name: first_name,
    last_name: last_name,
    birthdate: birthdate,
    number_oscars: number_oscars,
    is_active: is_active,
  })
    .from("actors")
    .then(() => res.send({ message: "actors was saved successfully" }))
    .catch((err) => res.send({ err: err, message: "There was an error" }));
});

// update actors set first_name = 'Bob' where actor_id = 11
app.put("/:actor_id", (req, res) => {
  const { actor_id } = req.params;
  const { first_name, last_name, birthdate, number_oscars, is_active } =
    req.body;

  db.update({
    first_name: first_name,
    last_name: last_name,
    birthdate: birthdate,
    number_oscars: number_oscars,
    is_active: is_active,
  })
    .from("actors")
    .where({ actor_id })
    .then(() => res.send({ message: "actors was updated successfully" }));
});

// delete from actors where actor_id= 1
app.delete("/:actor_id", (req, res) => {
  const { actor_id } = req.params;
  db.delete()
    .from("actors")
    .where({ actor_id })
    .then(() => res.send({ message: "actor was deleted successfully" }));
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000! ");
});
