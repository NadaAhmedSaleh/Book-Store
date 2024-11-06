const express = require("express");
const app = express();
app.use(express.json());

const { Op } = require("sequelize");
const {
  Sequelize,
  sequelize,
  Author,
  Book,
  Store,
  StoreBook,
} = require("./models");

const authorRoutes = require("./routes/author.route");
const storeRoutes = require("./routes/store.route");

app.use("/authors", authorRoutes);
app.use("/stores", storeRoutes);

// TODO: should be moved to separate services and controllers as the rest

app.get("/authors/:authorId/books", async (req, res) => {
  try {
    const books = await Book.findAll({
      where: { author_id: req.params.authorId },
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Error fetching books by author" });
  }
});

app.get("/books/cheapest", async (req, res) => {
  try {
    const books = await sequelize.query(
      `SELECT a.id as author_id, a.name as author_name, MIN(sb.price) as cheapest_price,
      b.name as book_name, b.id as book_id
      FROM Authors a
      JOIN Books b ON a.id = b.author_id
      JOIN StoreBooks sb ON b.id = sb.book_id
      GROUP BY a.id, b.id
      ORDER BY a.id;`,
      { type: Sequelize.QueryTypes.SELECT }
    );
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: "Error fetching cheapest books" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
