const { RecipeDTO } = require("./recipe.dto");

class UserDTO {
    constructor({id, name, surname, birthdate, email, avatar, status, Recipes, createdAt }){
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.birthdate = birthdate,
        this.email = email,
        this.avatar= avatar,
        this.status = status,
        this.recipes = Recipes ? Recipes.map(r => new RecipesUserDTO(r)): null,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

class RecipesUserDTO {
    constructor({id, name}){
        this.id = id
        this.name = name
    }
}

module.exports = { UserDTO }