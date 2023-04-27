const {Sequelize, ModelStatic, DataTypes} = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> } 
 */

module.exports = (sequelize) => {
    const MM_recipe_ingredient = sequelize.define('MM_recipe,ingredient', {
        quantity: {
            type: DataTypes.FLOAT(6),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                max: 10000,
                len: [1, 5]
            }
        },
        unit: {
            type: DataTypes.STRING(11),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isIn: [["grammes", "kilogrammes", "tbsp", "tsp", "lb", "oz", "cup"]]

            }
        }
    },
    {
        tableName: "MM_recipe_ingredient"
    })
    return MM_recipe_ingredient;
}