const yup = require('yup');

const createIngredientValidator = yup.object({
    name: yup.string().min(1).max(50).required(),
    calorie: yup.number().min(1).max(10000).positive().required(),
    carbohydrate: yup.number().min(1).max(1000).positive().required(),
    fats: yup.number().min(1).max(1000).positive().required(),
    proteins: yup.number().min(1).max(1000).positive().required(),
})

const updateIngredientValidator = yup.object({
    name: yup.string().min(1).max(50).required(),
    calorie: yup.number().min(1).max(10000).positive().required(),
    carbohydrate: yup.number().min(1).max(1000).positive().required(),
    fats: yup.number().min(1).max(1000).positive().required(),
    proteins: yup.number().min(1).max(1000).positive().required(),
})

module.exports = {createIngredientValidator, updateIngredientValidator}