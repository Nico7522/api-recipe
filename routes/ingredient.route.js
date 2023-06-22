const ingredientController = require('../controllers/ingredient.controller');
const paginationMiddleware = require('../middlewares/pagination.middleware');

const ingredientRoute = require('express').Router();


ingredientRoute.route('/')
    .get(paginationMiddleware(15) ,ingredientController.getAll)
    .post(ingredientController.create)

ingredientRoute.route('/form')
    .get(ingredientController.getAllForm)

ingredientRoute.route('/:id')
    .get(ingredientController.getById)
    .put(ingredientController.update)
    .delete(ingredientController.delete)
    

module.exports = ingredientRoute;