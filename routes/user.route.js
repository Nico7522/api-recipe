const ConnexionController = require('../controllers/connection.controller');
const userController = require('../controllers/user.controller');
const paginationMiddleware = require('../middlewares/pagination.middleware');
const authToken = require('../middlewares/token.middleware');
const bodyValidator = require('../middlewares/validator');
const { registerValidator, loginValidator, changeUserStatusValidator } = require('../validators/user.validator');

const userRoute = require('express').Router()

userRoute.route('/')
.get(paginationMiddleware(8),userController.GetAll)

userRoute.route('/forgotpassword').post(userController.forgotPassword)
userRoute.route('/resetpassword')
.patch(userController.updatePassword)

userRoute.route('/:id')
.get(userController.GetById)
.put(userController.update)
.patch(bodyValidator(changeUserStatusValidator),userController.updateStatus)
.delete(userController.delete)

userRoute.route('/signup')
.post( bodyValidator(registerValidator) ,ConnexionController.signup)

userRoute.route('/login')
.post(bodyValidator(loginValidator) ,ConnexionController.login)

module.exports = userRoute;