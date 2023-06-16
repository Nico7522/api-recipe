
const { User } = require("../models");

class CommentDTO {
    constructor({id, text, User, UserId, name, createdAt, Recipe, valid}) {
        this.id = id,
        this.text = text,
        this.creatorId = UserId ? UserId : null
        this.userName = name ? name : null;
        this.createdAt = new Date(createdAt).toLocaleString('fr')
        this.recipeId = Recipe ? Recipe.id: null
        this.recipeName = Recipe ? Recipe.name : null
        this.valid = valid
    }
}

module.exports = { CommentDTO }