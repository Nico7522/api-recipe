const contactController = require('../controllers/contact.controller')


const contactRoute = require('express').Router()

contactRoute.route('/')
    .post(contactController.post)

module.exports = contactRoute