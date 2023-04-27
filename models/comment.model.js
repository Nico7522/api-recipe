const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Comment = sequelize.define('Comment', {
        text: {},
        valid: {},
    },
    {
        tableName: "Comment"
    })
    return Comment
}