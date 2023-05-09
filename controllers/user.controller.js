const { Request, Response } = require("express");
const db = require("../models");
const userService = require("../services/user.service");
const {
  SuccesMultipleResponse,
  SuccesResponse,
} = require("../utils/responses");
const argon2 = require("argon2");

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
  GetById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
      res.sendStatus(404);
      return;
    }
    res.status(200).json(new SuccesResponse(user));
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  update: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const userUpdate = await userService.update(id, data);
    if (!userUpdate) {
      res.sendStatus(404);
      return;
    }
    res.status(201).json(userUpdate);
  },

  /**
   * @param {Request} req
   * @param {Response} res
   */
  delete: async (req, res) => {
    const { id } = req.params;
    const isDeleted = await userService.delete(id);
    if (!isDeleted) {
      res.sendStatus(404);
    }
    res.sendStatus(204);
  },


 /**
   * @param {Request} req
   * @param {Response} res
   */
  updateStatus: async(req, res) => {
    const { id } = req.params;
    const status = req.body.status;
    const userToUpdate = await userService.updateStatus(id, status);
    if (!userToUpdate) {
      res.sendStatus(404);
      return;
    };
    res.status(201).json(userToUpdate)
  },

  updatePassword: async(req, res) => {
    const { id } = req.params;
    const newPassword = req.body.password;
    console.log(newPassword);
    const passwordToUpdate = await userService.updatePassword(id, newPassword);
    if (passwordToUpdate === 0) {
      res.status(304).json('Password doesn\'t not match the requirements !')
      return;
    };
    if (passwordToUpdate === -1) {
      res.status(304).json('Password must be different !')

    }
    res.status(201).json('Password changed')
  }
};

module.exports = userController;
