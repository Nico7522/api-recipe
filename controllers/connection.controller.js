const { Request, Response } = require("express");
const ConnexionService = require("../services/connection.service");
const userService = require("../services/user.service");
const { SuccesResponse } = require("../utils/responses");

const ConnexionController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  signup: async (req, res) => {
    const data = req.body;
    const newUser = await ConnexionService.signup(data)
    res.status(201).json(new SuccesResponse(newUser, 201));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  login: async () => {},
};
module.exports = ConnexionController;
