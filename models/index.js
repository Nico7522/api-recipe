const { Sequelize } = require('sequelize');
const { DB_SERVEUR, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const dataBase = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVEUR,
    dialect: 'mysql'
})

const db = {};
db.sequelize = dataBase

module.exports = db;