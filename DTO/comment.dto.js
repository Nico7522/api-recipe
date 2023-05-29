// const { User } = require("../models")

class CommentDTO {
    constructor({id, text, UserId, name, createdAt, Recipe}) {
        this.id = id,
        this.text = text,
        this.userId = UserId,
        this.userName = name ? name : null;
        this.createdAt = new Date(createdAt).toLocaleString('fr')
        this.recipeId = Recipe ? Recipe.id: null
        this.recipeName = Recipe ? Recipe.name : null
    }
}

module.exports = { CommentDTO }