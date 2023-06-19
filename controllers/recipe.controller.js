const { Request, Response } = require("express");
const db = require("../models");
const recipeService = require("../services/recipe.service");
const {
  SuccesResponse,
  SuccesMultipleResponse,
  CountResponse,
} = require("../utils/responses");
const recipeController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAllRecipes: async (req, res) => {
  
    const isValid = req.query.valid
    const { page, limit, startIndex, endIndex } = req.pagination
    const {recipes, count} = await recipeService.getAllRecipes(startIndex, endIndex, limit, page, isValid);
    res.status(200).json(new SuccesMultipleResponse(recipes, count));
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAllPaginated: async (req,res) => {
  
    const tag = req.query.tag;
    const nameRecipe = req.query.name;
    const { ingredients } = req.query;
 
    const { page, limit, startIndex, endIndex } = req.pagination
    const recipes = await recipeService.getAllPaginated(startIndex, endIndex, limit, page, tag, nameRecipe, ingredients)
    res.status(200).json(new SuccesMultipleResponse(recipes, 0))
  },


    /**
   * @param {Request} req
   * @param {Response} res
   */
  getTopRecipe: async (req,res) => {
     
      const recipes = await recipeService.getTopRecipe();
      console.log(recipes);
      res.status(200).json(recipes)
    },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAllRaw: async (req, res) => {
    const recipes = await recipeService.getAllRaw();
    res.status(200).json(recipes);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getByReact: async (req,res) => {
    const {id} = req.params
    const recipes = await recipeService.getByReact(id);
    res.status(200).json(recipes[0]);
  },


  /**
   * @param {Request} req
   * @param {Response} res
   */
  Count: async (req, res) => {
    console.log("req query =>", req.query);
    const { name } = req.query;
    const count = await recipeService.Count(name);
    res.status(200).json(new CountResponse(count));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const recipe = await recipeService.getById(id);
    if (!recipe) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(new SuccesResponse(recipe));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
    const data = req.body;
    
    const newRecipe = await recipeService.create(data);
    res.location("/recipe/" + newRecipe.id);
    res.status(200).json(new SuccesResponse(newRecipe, 200));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const recipeUpdated = await recipeService.update(id, data);
    return res.status(201).json(recipeUpdated);
  },
  
  /**
   * @param {Request} req
   * @param {Response} res
  */
 delete: async (req, res) => {
   const { id } = req.params;
   console.log(id);
    const isDeleted = await recipeService.delete(id);
    if (!isDeleted) {
      return res.sendStatus(404);
    }
   return res.sendStatus(204);
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  react: async (req, res) => {
    const recipeId = req.body.recipeId;
    const userId = req.body.userId;
    const reaction = req.body.reaction;
    const newReaction = await recipeService.react(recipeId, userId, reaction);
    res.location("/recipe/" + recipeId);
    res.status(201).json(newReaction);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  comment: async (req, res) => {
    console.log(req.body);
    const data = req.body;
    const newComment = await recipeService.comment(data);
    res.location("/recipe/" + req.body.RecipeId);
    res.status(201).json(newComment);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getComment: async (req, res) => {
    const allComments = await recipeService.getComment();
    res.status(200).json(allComments);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  deleteComment: async (req, res) => {
    const { id } = req.body;
    const isDeleted = await recipeService.deleteComment(id);
    if (!isDeleted) {
      res.sendStatus(404);
    }
    res.sendStatus(204);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  updateImage: async (req, res) => {
    const { id } = req.params;
    const img = req.file.filename;
    const imageUpdated = await recipeService.updateImage(id, img);
    if (!imageUpdated) {
      res.sendStatus(404);
      return;
    }
    res.sendStatus(204)
  },

  updateValidity: async (req,res) => {
    const { id } = req.params;
    const validity = req.body.valid;
    const changeValidity = await recipeService.updateValidity(id, validity);
    if (!changeValidity) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(new SuccesResponse(changeValidity, 200))
  }


};

module.exports = recipeController;
