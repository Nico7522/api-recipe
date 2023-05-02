const ConnexionController = require('../controllers/connection.controller');
const userController = require('../controllers/user.controller');

const userRoute = require('express').Router()

userRoute.route('/')
.get(userController.GetAll)

userRoute.route('/:id')
.get(userController.GetById)
.put(userController.update)
.delete(userController.delete)
userRoute.route('/signup')
.post(ConnexionController.signup)

userRoute.route('/login')
.post(ConnexionController.login)

module.exports = userRoute;