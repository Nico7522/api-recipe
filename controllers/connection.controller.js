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
  login: async (req, res) => {
    const {email, password} = req.body
    const user = await ConnexionService.login(email, password);
    if (!user) {
        res.sendStatus(404);
        return;
    }
    res.status(200).json(new SuccesResponse(user))
  },
};
module.exports = ConnexionController;
