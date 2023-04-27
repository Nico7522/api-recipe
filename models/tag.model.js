const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
    const Tag = sequelize.define('Tag', {
        name: {}
    },
    {
        tableName: "Tag"
    })
    return Tag
}