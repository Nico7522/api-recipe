const contactController = require('../controllers/contact.controller')
const authToken = require('../middlewares/token.middleware')


const contactRoute = require('express').Router()

contactRoute.route('/')
    .post(authToken(['Admin', 'User', 'Certified User']), contactController.post)

module.exports = contactRoute