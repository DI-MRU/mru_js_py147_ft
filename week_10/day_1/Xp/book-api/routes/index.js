const express = require("express");
const router = express.Router();
const getBooks = require("./get-books/index");
const getBooksById = require("./get-books-by-id/index");
const createBooks = require("./create-books/index");
const updateBooks = require("./update-books/index");
const deleteBooks = require("./delete-books/index");

router.get("/", getBooks);
router.get("/:id", getBooksById);
router.post("/", createBooks);
router.put("/:id", updateBooks);
router.delete("/:id", deleteBooks);

module.exports = router;
