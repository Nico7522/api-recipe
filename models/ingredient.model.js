const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: "UK_ingredient_name",
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 50],
        },
      },
      calories: {
        type: DataTypes.FLOAT(7),
        allowNull: false,
        validate: {
          max: 10000,
          notNull: true,
          notEmpty: true,
          len: [1, 7],
        },
      },
      carbohydrates: {
        type: DataTypes.FLOAT(6),
        allowNull: true,
        validate: {
          max: 1000,
          notNull: false,
          notEmpty: false,
        },
      },
      fats: {
        type: DataTypes.FLOAT(6),
        allowNull: true,
        validate: {
          max: 1000,
          notNull: false,
          notEmpty: false,
        },
      },
      proteins: {
        type: DataTypes.FLOAT(6),
        allowNull: true,
        validate: {
          max: 1000,
          notNull: false,
          notEmpty: false,
        },
      },
      valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isIn: [[true, false]],
        },
      },
    },
    {
      tableName: "Ingredient",
    }
  );
  return Ingredient;
};
