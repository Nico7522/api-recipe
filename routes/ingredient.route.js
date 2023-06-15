const ingredientController = require('../controllers/ingredient.controller');
const paginationMiddleware = require('../middlewares/pagination.middleware');

const ingredientRoute = require('express').Router();


ingredientRoute.route('/')
    .get(paginationMiddleware(20) ,ingredientController.getAll)
    .post(ingredientController.create)

ingredientRoute.route('/:id')
    .get(ingredientController.getById)
    .put(ingredientController.update)
    .delete(ingredientController.delete)
    

module.exports = ingredientRoute;