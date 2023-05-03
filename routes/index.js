const route = require('express').Router();

const recipeRoute = require('./recipe.route')
const userRoute = require('./user.route');
const commentRoute = require('./comment.route');
const ingredientRoute = require('./ingredient.route');
const tagRoute = require('./tag.route');

route.use('/recipe', recipeRoute);
route.use('/user', userRoute);
// route.use('/comment', commentRoute);
route.use('/ingredient', ingredientRoute);
route.use('/tag', tagRoute);


module.exports = route;