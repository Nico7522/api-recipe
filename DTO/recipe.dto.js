const { IngredientDTO } = require("./ingredient.dto");

class RecipeDTO {
    constructor({id, name, description, image, valid, Ingredients, createdAt}) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.imgURL = image,
        this.valid = valid,
        this.ingredients = Ingredients ? Ingredients.map((i) => new IngredientDTO(i)) : [];
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = { RecipeDTO };