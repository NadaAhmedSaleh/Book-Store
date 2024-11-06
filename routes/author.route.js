const express = require("express");
const router = express.Router();
const AuthorController = require("../controllers/author.controller");

router.post("/", AuthorController.createAuthor);
router.get("/:authorId/books", AuthorController.getAuthorBooks);
router.post("/:authorId/books", AuthorController.createBook);

module.exports = router;
