const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param {Sequelize} sequelize
 * @returns {ModelStatic<any>}
 */

module.exports = (sequelize) => {
  const Ingredient = sequelize.define(
    "Ingredient",
    {
      name: {},
      calories: {},
      carbohydrates: {},
      fat: {},
      proteins: {},
      valid: {},
    },
    {
      tableName: "Ingredient",
    }
  );
  return Ingredient;
};
