const { Store, StoreBook, Book } = require("../models");
const { Op } = require("sequelize");


class StoreService {
  static async createStore(data) {
    return await Store.create(data);
  }

  static async createStoreBook(data) {
    console.log({ data });
    return await StoreBook.create(data);
  }

  static async getStoreBooks(storeId) {
    const storeBooks = await StoreBook.findAll({
      where: { store_id: storeId },
      attributes: ["book_id"],
    });
    const bookIds = storeBooks.map((storeBook) => storeBook.book_id);
    if (bookIds.length === 0) {
      return [];
    }
    return await Book.findAll({
      where: { id: { [Op.in]: bookIds } },
    });
  }
}

module.exports = StoreService;
