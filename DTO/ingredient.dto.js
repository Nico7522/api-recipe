class IngredientDTO {
    constructor({name, calories, carbohydrates, fats, proteins, valid, createdAt}){
        this.name = name,
        this.calories = calories,
        this.carbohydrates = carbohydrates,
        this.fats = fats,
        this.proteins = proteins,
        this.valid = valid,
        this.createdAt = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = {IngredientDTO};