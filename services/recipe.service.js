const { RecipeDTO } = require("../DTO/recipe.dto");
const db = require("../models");

const recipeService = {
  getAll: async () => {
    const { rows, count } = await db.Recipe.findAndCountAll({
      distinct: true,
    });

    return { recipes: rows.map((r) => new RecipeDTO(r)), count };
  },
  getById: async (id) => {
    const recipe = await db.Recipe.findByPk(id)
    return recipe ? new RecipeDTO(recipe) : null
  },
  create: async (recipeToCreate) => {
    const recipe = await db.Recipe.create(recipeToCreate);
    return recipe ? recipe : null;
  },
  update: async (id, changement) => {
    const recipeToUpdate = await db.Recipe.update(changement, {
        where: { id }
    });
    const recipeUpdated = await db.Recipe.findByPk(id)
    return recipeUpdated;
  },
  delete: async (id) => {
    const isDeleted = await db.Recipe.destroy({
        where: { id }
    });
    console.log('isDeleted => ', isDeleted);
    return isDeleted === 1;
  },
};

module.exports = recipeService;
