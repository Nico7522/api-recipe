const {Request, Response } = require('express');
const userService = require('../services/user.service');
const { SuccesMultipleResponse } = require('../utils/responses');

const userController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  GetAll: async (req, res) => {
    const { users, count } = await userService.getAll();
    res.status(200).json(new SuccesMultipleResponse(users, count));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  GetById: async (req, res) => {},

  /**
   * @param {Request} req
   * @param {Response} res
   */
  create: async (req, res) => {
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {},

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {},
};

module.exports = userController;