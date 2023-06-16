const { ObjectSchema } = require('yup');
const { errorResponse } = require('../utils/responses');

/**
 * @param {ObjectSchema} yupValidator
 */

const bodyValidator = (yupValidator) => {
    return async (req, res, next) => {
        try {
            const validData = await yupValidator.noUnknown().validate(req.body, {abortEarly : false})
            req.body = validData;
            next()
        } catch (error) {
            return res.status(400).json(new errorResponse(error.errors))
        }
    }
}

module.exports = bodyValidator;