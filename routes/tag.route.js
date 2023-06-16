const tagController = require('../controllers/tag.controller');

const tagRoute = require('express').Router();

tagRoute.route('/')
.get(tagController.getAll)
.post(tagController.create)

tagRoute.route('/:id')
.get(tagController.getById)
.put(tagController.update)
.delete(tagController.delete)

module.exports = tagRoute;