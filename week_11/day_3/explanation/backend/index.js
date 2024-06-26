const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const knex = require("knex");
const bodyParser = require("body-parser");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "8462",
    database: "postgres",
  },
});

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "username and password are required" });
    }
    const hashPass = await bcrypt.hash(password, 10);
    const existingUser = await db
      .select("*")
      .from("account")
      .where({ username })
      .first();
    if (existingUser) {
      return res.status(409).json({ message: "username already exists" });
    }
    await db("account").insert({
      username: username,
      password: hashPass,
    });
    res.send({ message: "User has been registered" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db
      .select("*")
      .from("account")
      .where({ username })
      .first();

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ username }, "secret", {
        expiresIn: "1h", // Token expires in
      });
      res.cookie("token", token, { httpOnly: true });
      res.status(200).json({ message: "Login successful", token });
    } else {
      res.send({
        message: "wrong credentials",
      });
    }
  } catch (err) {
    console.error(err);
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.send({ message: "User has been logout" });
});

app.get("/safe", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token, "secret", (err) => {
    if (err) {
      return res.status(403).json({ message: "Token verification failed" });
    } else {
      res.send({ message: "safe route" });
    }
  });
});

app.listen(8080, () => {
  console.log("Express App is running");
});
