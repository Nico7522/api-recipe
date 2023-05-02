const { UserDTO } = require("../DTO/user.dto");
const db = require("../models");


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
    getById: async() => {},
    create: async() => {},
    update: async() => {},
    delete: async() => {}
}

module.exports = userService;