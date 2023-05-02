const argon2 = require('argon2');
const { UserDTO } = require('../DTO/user.dto');
const db = require('../models')
const ConnexionService = {
    signup: async(userToCreate) => {
        const hashedPwd = await argon2.hash(userToCreate.password)
        userToCreate.password = hashedPwd
        const user = await  db.User.create(userToCreate);
        return user ? new UserDTO(user) : null
    },
    login: async(email, password) => {
        const user = await db.User.findOne({
            where : { email }
        })

        if (!user) {
            return null;
        }
        const isValid = await argon2.verify(user.password, password)
        if (!isValid) {
            return null;
        }

        return new UserDTO(user);
    }
};

module.exports = ConnexionService;