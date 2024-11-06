"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.belongsToMany(models.Book, {
        through: models.StoreBook,
        foreignKey: "store_id",
      });
    }
  }
  Store.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Store",
    }
  );
  return Store;
};
