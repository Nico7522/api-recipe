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
  getAll: async () => {
    // const { rows, count } = await db.Recipe.findAndCountAll({
    //   include: [
    //     Ingredient,
    //     { model: User, as: "creator" },
    //     Tag,
    //     Comment,
    //     { model: User, as: "reactionUser" },
    //   ],
    //   attributes: {
    //     include: [
    //       [
    //         sequelize.literal(
    //           `(SELECT COUNT(mm_user_react_recipe.reaction) FROM recipe JOIN mm_user_react_recipe ON recipe.id = mm_user_react_recipe.RecipeId)`
    //         ),
    //         "number",
    //       ],
    //     ],
    //   },
    //   order: [["number", "DESC"]],
    //   group: ["Recipe.id"],
    // });
    // return { recipes: rows.map((r) => r) };
    // const recipes = await db.Recipe.findAll({
    //   include: [
    //     { model: db.Ingredient },
    //     { model: db.User, as: "creator" },
    //     { model: db.Tag },
    //     { model: db.Comment },
    //     { model: db.User, as: "reactionUser"},
    //   ],
    //   attributes: {
    //     include: [
    //       [
    //         sequelize.fn(
    //           "COUNT",
    //           sequelize.col("reactionUser.MM_user_react_recipe.reaction")
    //         ),
    //         "reactionCount",
    //       ],
    //     ],
    //   },
    //   order: [[sequelize.literal("reactionCount"), "DESC"]],
    //   group: [
    //     "Recipe.id",
    //     "Ingredients.MM_recipe_ingredient.IngredientId",
    //     "creatorId",
    //     "Tags.id",
    //     "Comments.id",
    //     "reactionUser.MM_user_react_recipe.RecipeId",
    //   ],
    //   // raw: true,
    // });
    // return recipes.map((r) => new RecipeDTO(r));
  },
  getAllRecipes: async (startIndex, endIndex, limit, page, isValid) => {
    let validity = isValid === 'true'? { valid: false } : {};

    const { rows, count } = await db.Recipe.findAndCountAll({
      include: [
        Ingredient,
        { model: User, as: "creator" },
        { model: Tag },
        Comment,
        { model: User, as: "reactionUser" },
      ],
      order: [["createdAt", "DESC"]],
      where: validity,
      distinct: true,
      offset: startIndex,
      limit: limit,
    });

    return { recipes: rows.map((r) => new RecipeDTO(r)), count };
  },

  getAllPaginated: async (
    startIndex,
    endIndex,
    limit,
    page,
    tag,
    nameRecipe,
    ingredients
  ) => {
    let whereConditionTags = {};
    let whereConditionName = {};
    let whereConditionIngredients = {};

    if (tag) {
      Array.isArray(tag) && (whereConditionTags = { name: { [Op.in]: tag } });

      !Array.isArray(tag) &&
        (whereConditionTags = { name: { [Op.startsWith]: tag } });
    }
    if (nameRecipe) {
      whereConditionName = { name: { [Op.startsWith]: nameRecipe } };
    }
    if (ingredients) {
      Array.isArray(ingredients) &&
        (whereConditionIngredients = { name: { [Op.in]: ingredients } });
      !Array.isArray(ingredients) &&
        (whereConditionIngredients = {
          name: { [Op.startsWith]: ingredients },
        });
    }

    const {rows, count } = await db.Recipe.findAndCountAll({
      include: [
        { model: Ingredient, where: whereConditionIngredients },
        { model: User, as: "creator" },

        { model: Tag, where: whereConditionTags },
        Comment,
        { model: User, as: "reactionUser" },
      ],

      order: [
        ["createdAt", "DESC"],
        [{ model: Tag }, "createdAt", "DESC"],
        [{ model: Ingredient }, "createdAt", "DESC"],
        [{ model: Comment }, "createdAt", "ASC"],
      ],
      where: whereConditionName,

      offset: startIndex,
      limit: limit,
      distinct: true,
    });
    return {recipes :rows.map((r) => new RecipeDTO(r)),
            count 
    }
  },
  getAllRaw: async () => {
    const recipes = await db.Recipe.findAll({
      include: [
        Ingredient,
        { model: User, as: "creator" },
        Tag,
        Comment,
        { model: User, as: "reactionUser" },
      ],
    });
    return recipes.map((r) => new RecipeRawDTO(r));
  },

  getTopRecipe: async () => {
    const r = await db.sequelize.query(
      `SELECT mm_user_react_recipe.RecipeId, recipe.*, COUNT(mm_user_react_recipe.reaction) as 'number' FROM mm_user_react_recipe JOIN recipe ON mm_user_react_recipe.RecipeId = recipe.id GROUP BY mm_user_react_recipe.RecipeId ORDER BY number DESC `,
      {
        model: Tag,
        mapToModel: true,
        model: User,
        as: "creator",
        mapToModel: true,
        model: User,
        as: "reactionUser",
        mapToModel: true,
        model: Comment,
        mapToModel: true,
        model: Ingredient,
        mapToModel: true,
      }
    );
    let three;
    if (r.length >= 3) {
      three = r.slice(0, 3);
    } else {
      three = r;
    }

    const data = [];
    i = 0;
    while (i < three.length) {
      const recipe = await db.Recipe.findByPk(three[i].id, {
        include: [
          Ingredient,
          { model: User, as: "creator" },
          Tag,
          Comment,
          { model: User, as: "reactionUser" },
        ],
      });
      data.push(recipe);

      i++;
    }

    return data.map((r) => new RecipeDTO(r));
  },

  getByReact: async (id) => {
    const react = await db.sequelize.query(
      `SELECT reaction, COUNT(reaction) as 'number' FROM mm_user_react_recipe WHERE RecipeId = ${id} GROUP BY reaction`
    );
    // const react = await db.sequelize.query(`SELECT * FROM mm_user_react_recipe WHERE RecipeId = ${id} and UserId = '1' and reaction = 'like'`)
    console.log(react);

    return react;
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
      include: [
        Ingredient,
        { model: User, as: "creator" },
        Tag,
        Comment,
        { model: User, as: "reactionUser" },
      ],
    });
    return recipe ? new RecipeDTO(recipe) : null;
  },
  create: async (recipeToCreate) => {
    const transaction = await db.sequelize.transaction();
    
    let recipe;
    
    console.log(recipeToCreate);
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
        include: [
          Ingredient,
          { model: User, as: "creator" },
          Tag,
          Comment,
          { model: User, as: "reactionUser" },
        ],
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
      include: [
        Ingredient,
        { model: User, as: "creator" },
        Tag,
        Comment,
        { model: User, as: "reactionUser" },
      ],
    });
    return new RecipeDTO(recipeUpdated);
  },

  delete: async (id) => {
   
    const isDeleted = await db.Recipe.destroy({  cascade: true, force: true, where: { id }});
      const commentsDeleted = await db.Comment.destroy({where: { RecipeId: {id}}})
      return isDeleted === 1;
  },

  react: async (recipeId, userId, reactionToCreate) => {
    const transaction = await db.sequelize.transaction();
    let recipe = await db.Recipe.findByPk(recipeId);
    try {
      await recipe.addReactionUser(
        userId,
        { through: { reaction: reactionToCreate } },
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
    const commentCreatedWithUser = await db.Comment.findByPk(
      commentCreated.id,
      {
        include: [User, Recipe],
      }
    );
    return new CommentDTO(commentCreatedWithUser);
  },

  getComment: async () => {
    const allComments = await db.Comment.findAll({
      include: [User],
    });
    return allComments;
  },

  deleteComment: async (id) => {
    const isDeleted = await db.Comment.destroy({
      where: { id },
    });
    return isDeleted === 1;
  },

  updateImage: async (id, img) => {
    const data = {
      image: `/images/recipe/${img}`,
    };

    const imageUpdated = await db.Recipe.update(data, {
      where: { id },
    });

    return imageUpdated[0] === 1;
  },

  updateValidity: async (id, validity) => {
    const isValid = await db.Recipe.update(
      { valid: validity },
      {
        where: { id: id },
      }
    );

    if (isValid) {
      const newUpdate = await db.Recipe.findByPk(id);
      return new RecipeDTO(newUpdate);
    }
    return isValid;
  },
};

module.exports = recipeService;
