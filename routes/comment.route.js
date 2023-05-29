const commentController = require('../controllers/comment.controller');
const recipeController = require('../controllers/recipe.controller');
const paginationMiddleware = require('../middlewares/pagination.middleware');

const commentRoute = require('express').Router();


commentRoute.route('/')
.get(paginationMiddleware(24),commentController.getAllAdmin)

commentRoute.route('/:id')
.patch(commentController.validComment)


module.exports = commentRoute;