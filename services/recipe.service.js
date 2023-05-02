const { where } = require("sequelize");
const { RecipeDTO } = require("../DTO/recipe.dto");
const db = require("../models");
const { Ingredient } =  require('../models')

const recipeService = {
  getAll: async () => {
    const { rows, count } = await db.Recipe.findAndCountAll({
      include: [Ingredient],
      distinct: true,
    });

    return { recipes: rows.map((r) => new RecipeDTO(r)), count };
  },
  getById: async (id) => {
    const recipe = await db.Recipe.findByPk(id)
    return recipe ? new RecipeDTO(recipe) : null
  },
  create: async (recipeToCreate) => {
    const transaction = await db.sequelize.transaction();
    let recipe;

    try {
      recipe = await db.Recipe.create(recipeToCreate, { transaction });
      
      if (recipeToCreate.ingredients) {
        console.log( 'dans le service =>', recipeToCreate.ingredients);
        for(const ingre of recipeToCreate.ingredients) {
          await recipe.addIngredient(ingre.id, {through : { quantity: ingre.quantity, unit: ingre.unit }, transaction})
        }
      }
      await transaction.commit();
      const recipeCreated = await db.Recipe.findByPk(recipe.id, {
        include: [Ingredient]
      })
      return recipeCreated ? new RecipeDTO(recipeCreated) : null;
    } catch (error) {
      await transaction.rollback();
      return null;
    }
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
