const { Request, Response } = require("express");
const recipeService = require("../services/recipe.service");
const { SuccesResponse } = require("../utils/responses");
const recipeController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const { recipes, count } = await recipeService.getAll();
    res.status(200).json(new SuccesResponse(recipes, count));
  },

    /**
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {},

    /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req,res) => {},

    /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req,res) => {},

    /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req,res) => {},
};

module.exports = recipeController;
