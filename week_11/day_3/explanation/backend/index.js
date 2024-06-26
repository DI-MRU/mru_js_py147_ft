const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const knex = require("knex");

// db connection
const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "8462",
    database: "postgres",
    port: 5432,
  },
});

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// register route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    await db
      .insert({ username, password: hashedPassword })
      .from("users")
      .then(() => {
        res.send("User registered");
      });
  } catch (err) {
    res.send({ message: err });
  }
});

// login route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.select("*").from("users").where({ username }).first();
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, "secret");
      res.cookie("token", token, { httpOnly: true });
      res.send({ message: "Logged in", token });
    } else {
      res.send("Invalid username or password");
    }
  } catch (err) {
    res.send({ message: err });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send({ message: "Logged out", token: "" });
});

// protected route
app.get("/protected", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    res.send({ message: "No token" });
  } else {
    jwt.verify(token, "secret", (err, user) => {
      if (err) {
        res.send({ message: err });
      } else {
        res.send({ message: "Protected route", user });
      }
    });
  }
});

app.listen(8080, () => {
  console.log("Express is running");
});
