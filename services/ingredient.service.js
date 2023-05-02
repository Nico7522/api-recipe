const { IngredientDTO } = require('../DTO/ingredient.dto');
const db = require('../models');

const ingredientService = {
    getAll: async () => {
        const {rows, count } = await db.Ingredient.findAndCountAll({
            distinct: true
        });
        return {
            ingredients: rows.map(i => new IngredientDTO(i)),
            count,
        }
    },
    getById: async (id) => {
        const ingredient = db.Ingredient.findByPk(id);
        return ingredient ? new IngredientDTO(ingredient) : null;
    },
    create: async (ingredientToCreate) => {
        const ingredient = await db.Ingredient.create(ingredientToCreate);
        return ingredient ? ingredient : null;
    },
    update: async (id, changement) => {
        const ingredientToUpdate = await db.Ingredient.update(changement, {
            where : { id }
        });

        return ingredientToUpdate[0] === 1;
    },
    delete: async (id) => {
        const isDeleted = await db.Ingredient.destroy({
            where: { id }
        });
        return isDeleted === 1
    },
};

module.exports = ingredientService