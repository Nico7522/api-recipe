const { Request, Response } = require("express");
const tagService = require("../services/tag.service");
const { SuccesMultipleResponse, SuccesResponse } = require("../utils/responses");

const tagController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  getAll: async (req, res) => {
    const { tags, count } = await tagService.getAll();
    res.status(200).json(new SuccesMultipleResponse(tags, count));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  getById: async (req, res) => {
    const { id } = req.params;
    const tag = await tagService.getById(id)
    if (!tag) {
        res.status(404);
        return;
    }
    res.status(200).json(new SuccesResponse(tag))
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
    const data = req.body
    const newTag = await tagService.create(data);
    res.location('/tag/' + newTag.id);
    res.status(201).json(new SuccesResponse(newTag, 201))

  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const { id }= req.params;
    const data = req.body;

    const tagUpdated = await tagService.update(id, data)
    if (!tagUpdated) {
        res.sendStatus(404);
    }
    res.status(201).json(tagUpdated)
  },
  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const { id } = req.params;
    const isDeleted = await tagService.delete(id);
    if (!isDeleted) {
        res.sendStatus(404);
    }
    res.sendStatus(204);
  },
};

module.exports = tagController;
