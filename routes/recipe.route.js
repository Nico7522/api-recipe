const recipeController = require('../controllers/recipe.controller');
const recipeService = require('../services/recipe.service');

const recipeRoute = require('express').Router()

recipeRoute.route('/')
.get(recipeController.getAll)
.post(recipeController.create)

recipeRoute.route('/react')
.post(recipeController.react)


recipeRoute.route('/comment').post(recipeController.comment)

recipeRoute.route('/search')
.get(recipeController.Count)

recipeRoute.route('/:id')
.get(recipeController.getById)
.put(recipeController.update)
.delete(recipeController.delete)

module.exports = recipeRoute;