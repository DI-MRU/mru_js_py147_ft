const express = require("express");
const getAll = require("./task/getAlltask");
const getById = require("./task/getTaskById");
const create = require("./task/postTask");
const update = require("./task/putTask");
const deleteTask = require("./task/deleteTask");

// Create a new router
const router = express.Router();

router.use("/", getAll);
router.use("/", getById);
router.use("/", create);
router.use("/", update);
router.use("/", deleteTask);

module.exports = router;
