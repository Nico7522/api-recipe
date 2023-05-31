const { Sequelize, ModelStatic, DataTypes } = require('sequelize');
const { Recipe } = require('.');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Comment = sequelize.define('Comment', {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                
            }
        },
        name: {
            type: DataTypes.STRING(25),
            allowNull: true,
            validate: {
                notNull: false,
                notEmpty: false,
                len: [1, 25]
            }
        },
        valid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        RecipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Recipe',
                key: 'id'
              },
              onDelete: 'CASCADE'
          },
    },
    {
        tableName: "Comment"
    })
    return Comment
}