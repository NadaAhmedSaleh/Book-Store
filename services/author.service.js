const { Author, Book } = require("../models");

class AuthorService {
  static async createAuthor(data) {
    return await Author.create(data);
  }

  static async getAuthorBooks(authorId) {
    return await Author.findAll({
      where: { id: authorId },
      include: "Books",
    });
  }

  static async createBook(data) {
    console.log({ data });
    return await Book.create(data);
  }

}

module.exports = AuthorService;
