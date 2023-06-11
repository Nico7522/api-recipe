const jsonwebtoken = require("jsonwebtoken");
const { JWT_SECRET, JWT_AUDIENCE, JWT_ISSUER } = process.env;

const tokenUtils = {
  generate: ({ id, status }) => {
    return new Promise((resolve, reject) => {
      const payload = { id, status };
      const secret = JWT_SECRET;
      const options = {
        algorithm: "HS512",
        expiresIn: "1d",
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
      };

      jsonwebtoken.sign(payload, secret, options, (error, token) => {
        error ? reject(error) : resolve(token);
        console.log(payload);
      });
    });
  },

  decode: (token) => {
    if (!token || token === "" || token === null || token === undefined) {
      return Promise.reject("Token not found");
    }

    return new Promise((resolve, reject) => {
      const options = {
        issuer: JWT_ISSUER,
        audience: JWT_AUDIENCE,
      };
      jsonwebtoken.verify(token, JWT_SECRET, options, (error, payload) => {
        if (error) {
          console.log('eeee', error);
          reject(error);
        }
        resolve(payload);
      });
    });
  },
};

module.exports = tokenUtils;
