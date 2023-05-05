const db = require("../models");
const userService = require("../services/user.service");
const { ReactDTO } = require("./react.dto");
const { IngredientDTO } = require("./ingredient.dto");
const { CommentDTO } = require("./comment.dto");

class RecipeDTO {
    constructor({id, name, description, image, valid, Ingredients,  reactionUser, Tags, Comments, User, creator, createdAt}) {
       
        this.id = id,
        this.name = name,
        this.description = description,
        this.imgURL = image,
        this.valid = valid,
        this.ingredients = Ingredients ? Ingredients.map((i) => new IngredientDTO(i)) : [],
        this.reactions = reactionUser ? reactionUser.map((i) => new ReactDTO(i)): [],
        this.tags = Tags ? Tags.map((t) => t.name) : [],
        this.comments = Comments ? Comments.map((c) => new CommentDTO(c)) : null,
        this.creator = creator ? creator.name: null
        this.createdAt = new Date(createdAt).toLocaleString('fr')
    
    }
}

class RecipeRawDTO {
    constructor({id, name, description, image, valid, Ingredients, Users, Tags, Comments, UserId, User, createdAt}) {
    
        this.id = id,
        this.name = name,
        this.description = description,
        this.imgURL = image,
        this.valid = valid,
        this.ingredients = Ingredients ? Ingredients.map((i) => new IngredientDTO(i)) : [],
        this.reactions = Users ? Users.map((i) => new ReactDTO(i)): [],
        this.tags = Tags ? Tags.map((t) => t.name) : [],
        this.Comments = Comments ? Comments.map((c) => new CommentDTO(c)) : null,
        this.creatorId = User ? User.name : null
        this.createdAt = new Date(createdAt).toLocaleString('fr')
    
    }
}

module.exports = { RecipeDTO, RecipeRawDTO };