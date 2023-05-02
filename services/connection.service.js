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
    login: async() => {}
};

module.exports = ConnexionService;