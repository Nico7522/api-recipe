const recipeController = require('../controllers/recipe.controller');

const commentRoute = require('express').Router();


commentRoute.route('/')
.post(recipeController.comment)


module.exports = commentRoute;