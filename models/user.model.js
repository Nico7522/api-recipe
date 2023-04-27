const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/** 
 * @param { Sequelize } sequelize
 * @returns {ModelStatic<any>} 
*/

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {},
        surname: {},
        birthdate: {},
        email: {},
        password: {},
        avatar: {}
    },
    {
        tableName: "User"
    })
    return User;
}