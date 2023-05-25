const commentController = require('../controllers/comment.controller');
const recipeController = require('../controllers/recipe.controller');

const commentRoute = require('express').Router();


commentRoute.route('/')
.get(commentController.getAll)


module.exports = commentRoute;