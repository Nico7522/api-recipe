const { RecipeDTO } = require("../DTO/recipe.dto");
const db = require("../models");
const { Ingredient, User, Recipe, MM_User_React_Recipe } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

const recipeService = {
  getAll: async () => {
    const { rows, count } = await db.Recipe.findAndCountAll({
      include: [Ingredient, User],
      distinct: true,
    });

    return { recipes: rows.map((r) => new RecipeDTO(r)), count };
  },

  Count: async (nameToSearch) => {
    console.log("nameToSearch =>", nameToSearch);
    let tab = [];
    nameToSearch.forEach((n) => tab.push(n));

    const findRecipesByIngredient = await db.Recipe.findAll({
      include: [
        {
          model: Ingredient,
          where: { name: nameToSearch },
          attributes: [],
          through: { attributes: [] },
        },
      ],
      attributes: [[sequelize.fn("COUNT", sequelize.col("Recipe.id")), "tot"]],
      group: "Recipe.id",
      having: sequelize.where(
        sequelize.fn("COUNT", sequelize.col("Recipe.id")),
        { [Op.eq]: Array.isArray(nameToSearch) ? nameToSearch.length : 1 }
      ),
    });
    return findRecipesByIngredient.length;
  },

  getById: async (id) => {
    const recipe = await db.Recipe.findByPk(id);
    return recipe ? new RecipeDTO(recipe) : null;
  },
  create: async (recipeToCreate) => {
    const transaction = await db.sequelize.transaction();
    let recipe;

    try {
      recipe = await db.Recipe.create(recipeToCreate, { transaction });

      if (recipeToCreate.ingredients) {
        for (const ingre of recipeToCreate.ingredients) {
          await recipe.addIngredient(ingre.id, {
            through: { quantity: ingre.quantity, unit: ingre.unit },
            transaction,
          });
        }
      }
      await transaction.commit();
      const recipeCreated = await db.Recipe.findByPk(recipe.id, {
        include: [Ingredient],
      });
      return recipeCreated ? new RecipeDTO(recipeCreated) : null;
    } catch (error) {
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, changement) => {
    const recipeToUpdate = await db.Recipe.update(changement, {
      where: { id },
    });
    const recipeUpdated = await db.Recipe.findByPk(id);
    return recipeUpdated;
  },
  delete: async (id) => {
    const isDeleted = await db.Recipe.destroy({
      where: { id },
    });

    return isDeleted === 1;
  },

  comment: async (recipeId, userId, reactionToCreate) => {
    const transaction = await db.sequelize.transaction();
    let recipe = await db.Recipe.findByPk(recipeId);
    try {
      await recipe.addUser(
        userId,
        { through: { reaction: reactionToCreate } },
        { transaction }
      );

      await transaction.commit();
      const newComment = await db.Recipe.findByPk(recipe.id, {
        includes: [User],
      });
      return newComment;
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      return;
    }
  },
};

module.exports = recipeService;
