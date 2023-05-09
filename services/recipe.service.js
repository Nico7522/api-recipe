const { RecipeDTO, RecipeRawDTO } = require("../DTO/recipe.dto");
const db = require("../models");
const {
  Ingredient,
  User,
  Recipe,
  MM_User_React_Recipe,
  Tag,
  Comment,
} = require("../models");
const sequelize = require("sequelize");
const { Op, where } = require("sequelize");
const { raw } = require("mysql2");
const { CommentDTO } = require("../DTO/comment.dto");

const recipeService = {
  getAll: async (offset, limit) => {
    const trie = await db.sequelize.query('SELECT * FROM Comment ORDER BY createdAt ASC');
    console.log(trie);
    const { rows, count } = await db.Recipe.findAndCountAll({
      include: [Ingredient, {model: User, as: "creator"}, Tag, Comment, {model: User, as: "reactionUser"}],
      order: [['createdAt', 'DESC']],
      distinct: true,
      offset: offset,
      limit: limit,
      
      
    });
    return { recipes: rows.map((r) => new RecipeDTO(r)), count };
  },
  getAllRaw: async () => {
    const recipes = await db.Recipe.findAll({
      include: [Ingredient, {model: User, as: "creator"}, Tag, Comment, {model: User, as: "reactionUser"}],

    });
    return recipes.map(r => new RecipeRawDTO(r))
  },

  getByReact: async (id) => {
    const react = await db.sequelize.query(`SELECT reaction, COUNT(reaction) as 'number' FROM mm_user_react_recipe WHERE RecipeId = ${id} GROUP BY reaction`)
    console.log(react)

    return react
  },

  Count: async (nameToSearch) => {
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
    const recipe = await db.Recipe.findByPk(id, {
      include: [Ingredient, {model: User, as: "creator"}, Tag, Comment, {model: User, as: "reactionUser"}],
    });
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
      if (recipeToCreate.tags) {
        for (const tag of recipeToCreate.tags) {
          await recipe.addTag(tag.id, { transaction });
        }
      }
      await transaction.commit();
      const recipeCreated = await db.Recipe.findByPk(recipe.id, {
        include: [Ingredient, {model: User, as: "creator"}, Tag, Comment, {model: User, as: "reactionUser"}],
      });

      return recipeCreated ? new RecipeDTO(recipeCreated) : null;
    } catch (error) {
      await transaction.rollback();
      return null;
    }
  },

  update: async (id, change) => {
    await db.Recipe.update(change, {
      where: { id },
    });
    const recipeUpdated = await db.Recipe.findByPk(id, {
      include: [Ingredient, {model: User, as: "creator"}, Tag, Comment, {model: User, as: "reactionUser"}],

    });
    return new RecipeDTO(recipeUpdated)
  },

  delete: async (id) => {
    const isDeleted = await db.Recipe.destroy({
      where: { id },
    });

    return isDeleted === 1;
  },

  react: async (recipeId, userId, reactionToCreate) => {
    const transaction = await db.sequelize.transaction();
    let recipe = await db.Recipe.findByPk(recipeId);
    try {
      await recipe.addReactionUser(
        userId,
        { through: { reaction : reactionToCreate } },
        { transaction }
      );

      await transaction.commit();
      const newReaction = await db.Recipe.findByPk(recipe.id, {
        includes: [User],
      });
      return newReaction;
    } catch (error) {
      console.log(error);
      await transaction.rollback();
      return;
    }
  },

  comment: async (comment) => {
    
   
    const user = await db.User.findByPk(comment.UserId);
    comment.name = user.name;
    console.log(comment);
    const commentCreated = await db.Comment.create(comment);
    const commentCreatedWithUser = await db.Comment.findByPk(commentCreated.id, {
      include: [User]
    })
    return new CommentDTO(commentCreatedWithUser)

  },

  getComment: async() => {
    const allComments = await db.Comment.findAll({
      include: [User],
      
    });
    return allComments;
  },


  deleteComment: async(id) => {
    const isDeleted = await db.Comment.destroy({
      where: { id }
    })
    return isDeleted === 1;
  }
};

module.exports = recipeService;
