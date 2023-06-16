const yup = require('yup');

const createTagValidator = yup.object({
    name: yup.string().min(1).max(13).oneOf(["Vegan", "Starter", "Main course", "Dessert", "Healthy", "Sweet", "Fat", "Hight-protein"]).required()
})

module.exports = {createTagValidator}