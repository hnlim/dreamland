const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("database", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: "./data/db.sqlite",
});

module.exports = sequelize;
