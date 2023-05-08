const tokenUtils = require("../utils/token");


const authToken = () => {
/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
    return async (req, res, next) => {
        const bearerToken = req.headers.authorization;
        const token = bearerToken.split(' ')[1];
        if (!token || token === "" || token === undefined) {
            res.status(401).json('Error')
        };
        const payload = await tokenUtils.decode(token)
        req.user = payload;
        next();
    }
}

module.exports = authToken;