const AuthorService = require("../services/author.service");

class AuthorController {
  static async createAuthor(req, res) {
    try {
      const author = await AuthorService.createAuthor(req.body);
      res.status(201).json(author);
    } catch (error) {
      res.status(500).json({ error: "Error creating author" });
    }
  }

  static async getAuthorBooks(req, res) {
    try {
      const books = await AuthorService.getAuthorBooks(req.params.authorId);
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ error: "Error fetching books by author" });
    }
  }

  static async createBook(req, res) {
    try {
      const book = await AuthorService.createBook({
        ...req.body,
        author_id: Number(req.params.authorId),
      });
      res.status(201).json(book);
    } catch (error) {
      res.status(500).json({ error: "Error creating book" });
    }
  }
}

module.exports = AuthorController;
