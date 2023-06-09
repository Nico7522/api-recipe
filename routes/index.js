const route = require('express').Router();

const recipeRoute = require('./recipe.route')
const userRoute = require('./user.route');
const commentRoute = require('./comment.route');
const ingredientRoute = require('./ingredient.route');
const tagRoute = require('./tag.route');
const searchRoute = require('./search.route');
const contactRoute = require('./contact.route');

route.use('/recipe', recipeRoute);
route.use('/user', userRoute);
route.use('/comment', commentRoute);
route.use('/ingredient', ingredientRoute);
route.use('/tag', tagRoute);
route.use('/search', searchRoute)
route.use('/contact', contactRoute);

module.exports = route;