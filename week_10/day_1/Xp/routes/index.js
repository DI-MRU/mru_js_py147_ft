const express = require("express");
const getData = require("./get-blogs/index");
const getDataById = require("./get-blogs-by-id/index");
const createBlog = require("./create-blogs/index");
const updateBlog = require("./update-blogs/index");
const deleteBlog = require("./delete-blogs/index");

const router = express.Router();

router.get("/", getData);
router.get("/:id", getDataById);
router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
