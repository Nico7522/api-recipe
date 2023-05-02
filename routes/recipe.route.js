const recipeController = require('../controllers/recipe.controller');

const recipeRoute = require('express').Router()

recipeRoute.route('/')
.get(recipeController.getAll)
.post(recipeController.create)

recipeRoute.route('/search')
.get(recipeController.Count)

recipeRoute.route('/:id')
.get(recipeController.getById)
.put(recipeController.update)
.delete(recipeController.delete)

module.exports = recipeRoute;