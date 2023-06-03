const { UserDTO } = require("../DTO/user.dto");
const db = require("../models");
const argon2 = require("argon2");
const { Recipe } = require("../models");
const { where } = require("sequelize");

const userService = {
  getAll: async (startIndex, endIndex, limit, page) => {
    const { rows, count } = await db.User.findAndCountAll({
      include: [Recipe],
      distinct: true,
      offset: startIndex,
      limit: limit,
    });
    return {
      users: rows.map((u) => new UserDTO(u)),
      count,
    };
  },
  getById: async (id) => {
    const user = await db.User.findByPk(id, {
      include: [Recipe],

    });
    return user ? new UserDTO(user) : null;
  },

  update: async (id, changement) => {
    const hashedPswd = await argon2.hash(changement.password);
    changement.password = hashedPswd;
    const userToUpdate = await db.User.update(changement, {
      where: { id },
    });
    const userUpdated = await db.User.findByPk(id);
    return new UserDTO(userUpdated);
  },
  delete: async (id) => {
    const isDeleted = await db.User.destroy({
      where: { id },
    });
    return isDeleted === 1;
  },

  updateStatus: async (id, status) => {
    const user = await db.User.update({status: status},{
      where: {id: id}
    });
    if (user) {
      const newUpdate = await db.User.findByPk(id);
      return new UserDTO(newUpdate)
    }
    return user
   
  },

  updatePassword: async (id, newPassword) => {
    const user = await db.User.findByPk(id);
    const isPasswordChanged = await argon2.verify(user.password, newPassword);
    const isPasswordOk = newPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
    if (!isPasswordOk) {
        return 0;
    }
    if (isPasswordChanged) {
        return -1
    }
    const hashedPassword = await argon2.hash(newPassword);
    const passwordToChange = await db.User.update(
      { password: hashedPassword },
      { where: { id: 1 } }
    );
    return passwordToChange;
  },
};

module.exports = userService;
