const { Op } = require("sequelize");
const { RecipeDTO } = require("../DTO/recipe.dto");
const db = require("../models");

const searchService = {
  getAll: async (tag, recipe, ingredient) => {
    console.log( "ingre", ingredient);
    
    const tagsCondition = tag
      ? { name: Array.isArray(tag) ? { [Op.in]: tag } : tag }
      : {};
    const recipeCondition = recipe ? { name: { [Op.startsWith]: recipe } } : {};
    const ingredientsCondition = ingredient
      ? {
          name: Array.isArray(ingredient)
            ? { [Op.in]: ingredient }
            : { [Op.startsWith]: ingredient},
            
        }
      : {};

    const recipes = await db.Recipe.findAll({
      include: [
        { model: db.Ingredient, where:  ingredientsCondition },
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
