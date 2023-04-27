const recipeController = require('../controllers/recipe.controller');

const recipeRoute = require('express').Router()

recipeRoute.route('/')
.get()
.post()

recipeRoute.route('/:id')
.get(recipeController.getAll)
.put()
.delete()

module.exports = recipeRoute;