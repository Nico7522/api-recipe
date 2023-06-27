const { Request, Response } = require("express");
const contactService = require("../services/contact.service");

const contactController = {
    /**
   * @param {Request} req
   * @param {Response} res
   */
    post: async (req, res) => {
        const {subject, body, mail } = req.body;
        const message = await contactService.post(subject, body, mail)
        res.sendStatus(200);
    },
}

module.exports = contactController