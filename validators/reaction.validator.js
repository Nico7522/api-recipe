const yup = require('yup');

const postReactionValidator = yup.object({
    reaction: yup.string().oneOf(["like", "dislike", "love", "tasty"]).required(),
    UserId: yup.number().integer().positive().required(),
    RecipeId: yup.number().integer().positive().required()
})