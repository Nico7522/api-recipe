const {Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const MM_user_react_recipe = sequelize.define('MM_user_react_recipe', {
        reaction: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: false,
                notEmpty: false,
                isIn: [["like", "dislike", "love", "tasty"]],
                len: [1, 7],
            }
        },
    },
    {
        tableName: "MM_user_react_recipe"
    })
    return MM_user_react_recipe
}