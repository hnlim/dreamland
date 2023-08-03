const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Emotion = sequelize.define(
  "emotions",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Emotion;
