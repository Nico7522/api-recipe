const commentController = require('../controllers/comment.controller');
const recipeController = require('../controllers/recipe.controller');
const recipeService = require('../services/recipe.service');

const multer = require('multer');
const uuid = require('uuid');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "public/images/recipe")
    },
    filename: (req, file, callback) => {
        const name = uuid.v4();
        const ext = file.originalname.split('.').at(-1);
        callback(null, name + '.' + ext)
    }
})

const upload = multer({storage});

const recipeRoute = require('express').Router()

recipeRoute.route('/')
.get(recipeController.getAll)
.post(recipeController.create)

recipeRoute.route('/react')
.post(recipeController.react)

recipeRoute.route('/react/:id')
.get(recipeController.getByReact)


recipeRoute.route('/comment')
.get(commentController.getAll)
.post(commentController.post)
.delete(recipeController.deleteComment)

recipeRoute.route('/search')
.get(recipeController.Count)

recipeRoute.route('/:id')
.get(recipeController.getById)
.put(recipeController.update)
.delete(recipeController.delete)

recipeRoute.route('/comment/:id')
.get(commentController.getById)
.put(commentController.edit)
.delete(commentController.delete)

module.exports = recipeRoute;