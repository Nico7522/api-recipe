const ingredientController = require('../controllers/ingredient.controller');

const ingredientRoute = require('express').Router();


ingredientRoute.route('/')
    .get(ingredientController.getAll)
    .post(ingredientController.create)

ingredientRoute.route('/:id')
    .get(ingredientController.getById)
    .put(ingredientController.update)
    .delete(ingredientController.delete)
    

module.exports = ingredientRoute;