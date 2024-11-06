const StoreService = require("../services/store.service");

class StoreController {
  static async createStore(req, res) {
    try {
      const store = await StoreService.createStore(req.body);
      res.status(201).json(store);
    } catch (error) {
      res.status(500).json({ error: "Error creating store" });
    }
  }

  static async createStoreBook(req, res) {
    try {
      const { price } = req.body;
      const { storeId: store_id, bookId: book_id } = req.params;

      const book = await StoreService.createStoreBook({
        store_id,
        book_id,
        price,
      });
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: "Error creating store book" });
    }
  }

  static async getStoreBooks(req, res) {
    try {
      const books = await StoreService.getStoreBooks(req.params.storeId);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Error retrieving books" });
    }
  }
}

module.exports = StoreController;
