const userService = require("../services/user.service");
const { errorResponse } = require("../utils/responses");
const tokenUtils = require("../utils/token");

const authToken = (status) => {
  /**
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  return async (req, res, next) => {
    const bearerToken = req.headers.authorization;
    const refreshToken = req.cookies
    console.log(refreshToken);
    const token = bearerToken?.split(" ")[1];
    if (!token || token === "" || token === 'undefined' || token === null) {
      res.status(403).json(new errorResponse("Error, you must be loged", 403));
      
    }
    const payload = await tokenUtils.decode(token);
    
 
    if (status) {
      const user = await userService.getById(payload.id);
      const statusLowerCase = status.map((r) => r.toLowerCase());
      const access = statusLowerCase.includes(user.status.toLowerCase());
      if (!access) {
        res.status(403).json("Access denied !");
        return;
      }
    }
    req.user = payload;
    next();
  };
};

module.exports = authToken;
