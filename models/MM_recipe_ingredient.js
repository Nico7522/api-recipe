const {Sequelize, ModelStatic, DataTypes} = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> } 
 */

module.exports = (sequelize) => {
    const MM_recipe_ingredient = sequelize.define('MM_recipe,ingredient', {
        quantity: {},
        unit: {}
    },
    {
        tableName: "MM_recipe_ingredient"
    })
    return MM_recipe_ingredient;
}