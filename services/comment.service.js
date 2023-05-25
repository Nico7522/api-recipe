const { CommentDTO } = require("../DTO/comment.dto");
const { User, Recipe, sequelize } = require("../models");
const db = require("../models");

const commentService = {
  getAll: async () => {

    const comments = await db.Comment.findAll({
      include: [User, Recipe],
    });
    return comments.map((c) => new CommentDTO(c));
  },

  getAllAdmin: async () => {
    const AllComments = await db.sequelize.query(
        `SELECT comment.id as "comment_id", comment.text, comment.valid as "valid", user.id as "user_id", user.name as "user_name", recipe.id as "recipe_id", recipe.name as "recipe_name" FROM comment LEFT JOIN recipe ON comment.RecipeId = recipe.id LEFT JOIN user ON comment.UserId = user.id`,
        {
          type: db.sequelize.QueryTypes.SELECT,
        
        }
      );
    return AllComments
  },

  getById: async (id) => {
    const comment = await db.Comment.findByPk(id);
    if (!comment) {
      return null;
    }
    return new CommentDTO(comment);
  },

  post: async (comment) => {
    console.log(comment);
    const user = await db.User.findByPk(comment.UserId);
    const recipe = await db.User.findByPk(comment.RecipeId);
    comment.name = user.name;
    const commentPosted = await db.Comment.create(comment);
    const commentDone = await db.Comment.findByPk(commentPosted.id, {
      include: [User, Recipe],
    });
    if (!commentDone) {
      return null;
    }
    return new CommentDTO(commentDone);
  },

  update: async (id, changement) => {
    const isUpdated = await db.Comment.update(changement, {
      where: { id },
    });
    if (!isUpdated) {
      return null;
    }
    return isUpdated[0] === 1;
  },

  delete: async (id) => {
    const isDeleted = await db.Comment.destroy({
      where: { id },
    });

    return isDeleted === 1;
  },

  validComment: async (id, validity) => {
    const isValid = await db.Comment.upsert({
        id :id,
        valid: validity
    });

    return isValid
  }
};



module.exports = commentService;
