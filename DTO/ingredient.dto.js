class IngredientDTO {
    constructor({name, calories, carbohydrates, fats, proteins, valid}){
        this.name = name,
        this.calories = calories,
        this.carbohydrates = carbohydrates,
        this.fats = fats,
        this.proteins = proteins,
        this.valid = valid
    }
}

module.exports = {IngredientDTO};