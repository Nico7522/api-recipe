const { Sequelize } = require('sequelize');
const { DB_SERVEUR, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const dataBase = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVEUR,
    dialect: 'mysql'
})

const db = {};
db.sequelize = dataBase

db.Recipe = require('./recipe.model')(dataBase);
db.Ingredient = require('./ingredient.model')(dataBase);
db.Tag = require('./tag.model')(dataBase);
db.User = require('./user.model')(dataBase);
db.MM_Recipe_Ingredient = require('./MM_recipe_ingredient.model')(dataBase);
db.MM_User_React_Recipe = require('./MM_user_react_recipe.model')(dataBase);
db.Comment = require('./comment.model')(dataBase);

db.Recipe.belongsToMany(db.Ingredient, {through: db.MM_Recipe_Ingredient})
db.Ingredient.belongsToMany(db.Recipe, {through: db.MM_Recipe_Ingredient})

module.exports = db;