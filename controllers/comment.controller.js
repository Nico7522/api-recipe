const { Request, Response } = require("express");
const { CommentDTO } = require("../DTO/comment.dto");
const commentService = require("../services/comment.service");
const {
  SuccesMultipleResponse,
  SuccesResponse,
} = require("../utils/responses");


const commentController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const comments = await commentService.getAll();
    res.status(200).json(new SuccesMultipleResponse(comments));
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAllAdmin: async (req, res) => {
    const isValid = req.query.valid
 
    const { page, limit, startIndex, endIndex } = req.pagination

    const allComments = await commentService.getAllAdmin(limit, startIndex, isValid);
    res.status(200).json(allComments);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const comment = await commentService.getById(id);
    if (!comment) {
      res.sendStatus(404);
      return;
    }

    res.status(200).json(new SuccesResponse(comment));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  post: async (req, res) => {
    const comment = req.body;
    const commentCreated = await commentService.post(comment);
    if (!commentCreated) {
      res.sendStatus(204);
    }
    res.location("/recipe/" + req.body.RecipeId);
    res.status(201).json(new SuccesResponse(commentCreated, 201));
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  edit: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const isUpdated = await commentService.update(id, data);
    const commentUpdated = await commentService.getById(id);
    if (!commentUpdated) {
      res.sendStatus(204);
    }
    res.status(200).json(new SuccesResponse(commentUpdated));
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const { id } = req.params;
    const isDeleted = await commentService.delete(id);
    if (!isDeleted) {
      res.sendStatus(400);
      return;
    }
    res.sendStatus(204);
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  validComment: async (req, res) => {
    const { id } = req.params;
    const validity = req.body.valid;

    const isValid = await commentService.validComment(id, validity);
   
    if (!isValid) {
      res.sendStatus(404);
      return;
    }

    res.status(201).json(new SuccesResponse(isValid, 200))
  },
};

module.exports = commentController;
