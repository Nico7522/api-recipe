const recipeController = require("../controllers/recipe.controller");
const searchController = require("../controllers/search.controller");
const paginationMiddleware = require("../middlewares/pagination.middleware");

const searchRoute = require("express").Router();

searchRoute.route('/')
    .get(searchController.getAll)

module.exports = searchRoute