const { CommentDTO } = require("../DTO/comment.dto");
const { User, Recipe } = require("../models");
const db = require("../models");


const commentService = {
    getAll: async () => {
        const comments = await db.Comment.findAll({
            include: [User, Recipe]
        });
        return comments.map(c => new CommentDTO(c));
    },

    getById: async (id) => {
        const comment = await db.Comment.findByPk(id)
        if (!comment) {
            return null
        }
        return new CommentDTO(comment)

    },

    post: async (comment) => {
        console.log(comment);
        const user = await db.User.findByPk(comment.UserId);
        const recipe = await db.User.findByPk(comment.RecipeId);
        comment.name = user.name
        const commentPosted = await db.Comment.create(comment);
        const commentDone = await db.Comment.findByPk(commentPosted.id, {
            include: [User, Recipe]
        })
        if (!commentDone) {
            return null;
        }
        return new CommentDTO(commentDone);

    },

    update: async(id, changement) => {
        const isUpdated = await db.Comment.update(changement, {
            where: { id }
        })
        if (!isUpdated) {
            return null;
        }
        return isUpdated[0] === 1

    },

    delete: async(id) => {
        const isDeleted = await db.Comment.destroy({
            where: { id }
        });

        return isDeleted === 1;
    }
};



module.exports = commentService