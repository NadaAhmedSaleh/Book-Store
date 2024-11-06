const express = require("express");
const router = express.Router();
const StoreController = require("../controllers/store.controller");

router.post("/", StoreController.createStore);
router.post("/:storeId/books/:bookId", StoreController.createStoreBook);
router.get("/:storeId/books", StoreController.getStoreBooks);

module.exports = router;

