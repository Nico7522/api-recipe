const {Sequelize, ModelStatic, DataTypes } = require('sequelize');


/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */

module.exports = (sequelize) => {
    const Reaction = sequelize.define('Reaction', {
        reaction: {},
    },
    {
        tableName: "Reaction"
    })
    return Reaction
}