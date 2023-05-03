const db = require("../models");
const userService = require("../services/user.service");
const { ReactDTO } = require("./comment.dto");
const { IngredientDTO } = require("./ingredient.dto");

class RecipeDTO {
    constructor({id, name, description, image, valid, Ingredients, Users, Tags, UserId, createdAt}) {
       
        this.id = id,
        this.name = name,
        this.description = description,
        this.imgURL = image,
        this.valid = valid,
        this.ingredients = Ingredients ? Ingredients.map((i) => new IngredientDTO(i)) : [],
        this.reactions = Users ? Users.map((i) =>new ReactDTO(i)): [],
        this.tags = Tags ? Tags.map((t) => t.name) : [],
        // this.react = react ? MM_User_React_Recipe : [];
        this.creatorId = UserId
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    
    }
}

module.exports = { RecipeDTO };