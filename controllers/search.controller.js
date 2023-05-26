const { Request, Response } = require("express");
const db = require("../models");
const recipeService = require("../services/recipe.service");
const {
  SuccesResponse,
  SuccesMultipleResponse,
  CountResponse,
} = require("../utils/responses");
const searchService = require("../services/search.service");

const searchController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
   getAll: async (req, res) => {
    const { tag } = req.query
    const recipe = req.query.name
    const recipes = await searchService.getAll(tag, recipe);
    res.status(200).json(recipes)
   } 
}

module.exports = searchController