const { Request, Response } = require("express");
const ingredientService = require("../services/ingredient.service");
const { SuccesResponse, SuccesMultipleResponse } = require("../utils/responses");

const ingredientController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */

  getAll: async (req, res) => {
    const { ingredient } = req.query
    const { page, limit, startIndex, endIndex } = req.pagination

    const { ingredients, count } = await ingredientService.getAll(ingredient, page, limit, startIndex, endIndex);
    res.status(200).json(new SuccesMultipleResponse(ingredients, count))
  },

   /**
   * @param {Request} req
   * @param {Response} res
   */

   getAllForm: async (req, res) => {
    const { ingredients, count } = await ingredientService.getAllForm();
    res.status(200).json(new SuccesMultipleResponse(ingredients, count))
   },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const ingredient = await ingredientService.getById(id);
    if (!ingredient) {
        res.sendStatus(404);
        return;
    };
    res.status(200).json(new SuccesResponse(ingredient))
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
    const data = req.body;
    console.log('data =>', data);
    const newIngredient = await ingredientService.create(data)
    console.log('newIngredient =>', newIngredient);
    res.location('/ingredient/' + newIngredient.id)
    res.status(201).json(new SuccesResponse(newIngredient, 201))
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const isUpdated = await ingredientService.update(id, data);
    if (!isUpdated) {
        res.sendStatus(404);
        return
    }
    res.location('/ingredient/' + id)
    res.sendStatus(204);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const { id } = req.params
    const isDeleted = await ingredientService.delete(id);
    if (!isDeleted) {
        res.sendStatus(404);
        return;
    }
    res.sendStatus(204)
  },
};

module.exports = ingredientController;