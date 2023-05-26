const { Op } = require("sequelize");
const { RecipeDTO } = require("../DTO/recipe.dto");
const db = require("../models");

const searchService = {
  getAll: async (tag, recipe) => {
    console.log(tag);
    const tagsCondition = tag ? { name: Array.isArray(tag) ? { [Op.in]: tag } : tag } : {};
    const recipeCondition = recipe ? { name: { [Op.startsWith]: recipe } } : {};

    const recipes = await db.Recipe.findAll({
      include: [
        { model: db.Ingredient },
        { model: db.User, as: "creator" },

        { model: db.Tag, where: tagsCondition },
        db.Comment,
        { model: db.User, as: "reactionUser" },
      ],
      where: recipeCondition,
    });
    return recipes.map((r) => new RecipeDTO(r));
  },
};

module.exports = searchService;
