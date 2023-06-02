const yup = require('yup');

const postCommentValidator = yup.object({
    text: yup.string().trim().required(),
    UserId: yup.number().integer().positive().required(),
    RecipeId: yup.number().integer().positive().required()
})

const updateCommentValidator = yup.object({
    text: yup.string().trim().required(),
}) 

const updateValidityCommentValidator = yup.object({
    valid: yup.boolean().required()
})