const recipeController = require('../controllers/recipe.controller');

const recipeRoute = require('express').Router()

recipeRoute.route('/')
.get(recipeController.getAll)
.post(recipeController.create)

recipeRoute.route('/:id')
.get(recipeController.getById)
.put()
.delete(recipeController.delete)

module.exports = recipeRoute;