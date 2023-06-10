const { Sequelize } = require('sequelize');
const { DB_SERVEUR, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

const dataBase = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_SERVEUR,
    dialect: 'mysql'
})

const db = {};
db.sequelize = dataBase

db.Recipe = require('./recipe.model')(dataBase);
db.Comment = require('./comment.model')(dataBase);
db.Ingredient = require('./ingredient.model')(dataBase);
db.Tag = require('./tag.model')(dataBase);
db.User = require('./user.model')(dataBase);
db.MM_Recipe_Ingredient = require('./MM_recipe_ingredient.model')(dataBase);
db.MM_User_React_Recipe = require('./MM_user_react_recipe.model')(dataBase);

// Liaison entre les recipes et les ingredients
db.Recipe.belongsToMany(db.Ingredient, {through: db.MM_Recipe_Ingredient})
db.Ingredient.belongsToMany(db.Recipe, {through: db.MM_Recipe_Ingredient})


// Liaison les recipes/users et les réactions
db.Recipe.belongsToMany(db.User, {through: db.MM_User_React_Recipe, as: 'reactionUser' })
db.User.belongsToMany(db.Recipe, {through: db.MM_User_React_Recipe, as: 'reactionRecipe'})

// Liaison entre les recipes et les tags
db.Recipe.belongsToMany(db.Tag, {through: "MM_Recipe_Tag"})
db.Tag.belongsToMany(db.Recipe, {through: "MM_Recipe_Tag"})

db.User.hasMany(db.Recipe, { foreignKey: {name: "UserId", field: "creatorId", as: "creator"}});
db.Recipe.belongsTo(db.User, {as: "creator" });


db.User.hasMany(db.Comment)
db.Comment.belongsTo(db.User)

db.Recipe.hasMany(db.Comment, { onDelete: 'CASCADE', onUpdate: 'cascade', hooks: true, foreignKeyConstraint: true});
db.Comment.belongsTo(db.Recipe, { onDelete: 'CASCADE', onUpdate: 'cascade', hooks: true, foreignKeyConstraint: true})

module.exports = db;