const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "8462",
    database: "postgres",
  },
});

module.exports = db;