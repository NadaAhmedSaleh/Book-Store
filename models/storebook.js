"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StoreBook extends Model {}
  StoreBook.init(
    {
      store_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      price: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "StoreBook",
    }
  );
  return StoreBook;
};
