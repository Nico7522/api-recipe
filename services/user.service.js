const { UserDTO } = require("../DTO/user.dto");
const db = require("../models");
const argon2 = require('argon2')

const userService = {

    getAll: async() => {
        const { rows, count } = await db.User.findAndCountAll({
            distinct: true
        });
        return {
            users: rows.map(u => new UserDTO(u)),
            count
        }
    },
    getById: async(id) => {
        const user = await db.User.findByPk(id);
        return user ? new UserDTO(user): null;
    },
    
    update: async(id, changement) => {
        const hashedPswd = await argon2.hash(changement.password);
        changement.password = hashedPswd;
        const userToUpdate = await db.User.update(changement, {
            where: { id }
        });
        const userUpdated = await db.User.findByPk(id)
        return new UserDTO(userUpdated)
    },
    delete: async(id) => {
        const isDeleted = await db.User.destroy({
            where: { id }
        })
        return isDeleted === 1;
    }
}

module.exports = userService;