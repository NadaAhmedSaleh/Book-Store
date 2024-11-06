"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, { foreignKey: "author_id" });
      Book.belongsToMany(models.Store, {
        through: models.StoreBook,
        foreignKey: "book_id",
      });
    }
  }
  Book.init(
    {
      name: DataTypes.STRING,
      author_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
