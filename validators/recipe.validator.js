const yup = require("yup");

const createRecipeValidator = yup.object({
  name: yup.string().min(1).max(50).required("Required field !"),
  description: yup.string().min(1).required("Required field !"),
  ingredients: yup
    .array()
    .of(
      yup.object({
        id: yup.number().integer().positive().required(),
        quantity: yup.number().integer().min(1).max(10000).required(),
        unit: yup.string().min(1).max(10).required()
      })
    )
    .min(1)
    .required(),
  tags: yup
    .array()
    .of(
      yup.object({
        id: yup.number().integer().positive().required(),
      })
    )
    .min(1)
    .required(),
  UserId: yup.number().integer().positive().required(),
});

const updateRecipeCoverValidator = yup.object({
    image: yup.mixed()
});

module.exports = {createRecipeValidator, updateRecipeCoverValidator};



   // name: yup.string().min(1).max(50).required(),
        // calories: yup.number().min(1).max(5).required(),
        // carbohydrates: yup.number().min(1).max(4).required(),
        // fats: yup.number().min(1).max(4).required(),
        // proteins: yup.number().min(1).max(4).required(),