const { Request, Response } = require("express");
const recipeService = require("../services/recipe.service");
const { SuccesResponse, SuccesMultipleResponse } = require("../utils/responses");
const recipeController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const { recipes, count } = await recipeService.getAll();
    res.status(200).json(new SuccesMultipleResponse(recipes, count));
  },

    /**
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const recipe = await recipeService.getById(id);
    if (!recipe) {
      res.sendStatus(404)
      return;
    }
    res.status(200).json(new SuccesResponse(recipe))
  },

    /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req,res) => {
    const data = req.body;
    const newRecipe = await recipeService.create(data);
    res.location('/recipe/' + newRecipe.id);
    res.status(201).json(new SuccesResponse(newRecipe, 201));
  },

    /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req,res) => {
    const { id } = req.params;
    const data = req.body;
    const isUpdated = await recipeService.update(id, data);
    if (!isUpdated) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204);
  },

    /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req,res) => {
    const { id } = req.params;
    const isDeleted = await recipeService.delete(id);
    if (!isDeleted) {
      res.sendStatus(404)
      
    }
    res.sendStatus(204);
  },
};

module.exports = recipeController;
