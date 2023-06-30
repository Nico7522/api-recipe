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
    console.log('refreshToken',req.cookies);
    const bearerToken = req.headers.authorization;
    const refreshJwt = req.cookies.refreshToken 
    // console.log(refreshJwt.refreshToken);
    let payload;
   
    const token = bearerToken?.split(" ")[1];
    console.log('token',token);
    console.log(token !== 'undefined');
    if (token && token !== "" && token !== 'undefined' && token !== null) {
      if (!refreshJwt || refreshJwt === "" || refreshJwt === 'undefined' || refreshJwt === null) {
        res.status(403).json(new errorResponse("Please relog", 403));
    
      }}

    if (!token || token === "" || token === 'undefined' || token === null) {
      if (!refreshJwt || refreshJwt === "" || refreshJwt === 'undefined' || refreshJwt === null) {
         res.status(403).json(new errorResponse("Error, you must be loged", 403));
    
      }
      
    }
    payload = await tokenUtils.decode(refreshJwt)
    newToken = await tokenUtils.generate(payload)
   
    
 
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
