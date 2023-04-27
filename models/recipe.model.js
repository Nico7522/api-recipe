const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      name: {},
      description: {},
      image: {},
      valid: {},
      // ingredients[]
      // comments[]
    },
    {
      tableName: "Recipe",
    }
  );
  return Recipe;
};
