const { Request, Response } = require("express");
const ConnexionService = require("../services/connection.service");
const userService = require("../services/user.service");
const { SuccesResponse } = require("../utils/responses");
const tokenUtils = require("../utils/token");

const ConnexionController = {
  /**
   * @param {Request} req
   * @param {Response} res
   */
  signup: async (req, res) => {
    const data = req.body;
    const user = await ConnexionService.signup(data)
    const token = await tokenUtils.generate(user)
    const refreshToken = await tokenUtils.refreshToken(user)
    res.cookie('refreshToken', refreshToken, { 
      sameSite: 'None', secure: true, 
      maxAge: 24 * 60 * 60 * 10000 }).status(201).json(new SuccesResponse({token, user}, 201))
    // res.status(201).json(new SuccesResponse({token, user}, 201));
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
    const token = await tokenUtils.generate(user)
    const refreshToken = await tokenUtils.refreshToken(user)
    res.cookie('refreshToken', refreshToken, { 
      sameSite: 'None', secure: true, 
      maxAge: 24 * 60 * 60 * 10000 }).status(200).json(new SuccesResponse({token, user}))
 

 
  },
};
module.exports = ConnexionController;
