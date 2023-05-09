class IngredientDTO {
    constructor({name, calories, carbohydrates, fats, proteins, MM_recipe_ingredient, valid, createdAt}){
        this.name = name,
        this.calories = calories,
        this.carbohydrates = carbohydrates,
        this.fats = fats,
        this.proteins = proteins,
        this.quantity = MM_recipe_ingredient.quantity
        this.units = MM_recipe_ingredient.unit
        this.valid = valid,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = {IngredientDTO};