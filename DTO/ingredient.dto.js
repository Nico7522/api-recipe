class IngredientRecipeDTO {
    constructor({id ,name, calories, carbohydrates, fats, proteins, MM_recipe_ingredient, valid, createdAt}){
        this.id = id,
        this.name = name,
        this.calories = calories,
        this.carbohydrates = carbohydrates,
        this.fats = fats,
        this.proteins = proteins,
        this.quantity = MM_recipe_ingredient.quantity ? MM_recipe_ingredient.quantity : null
        this.units = MM_recipe_ingredient.unit ? MM_recipe_ingredient.unit  : null
        this.valid = valid,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

class IngredientDTO {
    constructor({id ,name, calories, carbohydrates, fats, proteins, MM_recipe_ingredient, valid, createdAt}){
        this.id = id,
        this.name = name,
        this.calories = calories,
        this.carbohydrates = carbohydrates,
        this.fats = fats,
        this.proteins = proteins,
      
        this.valid = valid,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = {IngredientRecipeDTO ,IngredientDTO};