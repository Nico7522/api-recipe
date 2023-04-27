const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

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
        valid: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
    },
    {
        tableName: "Comment"
    })
    return Comment
}