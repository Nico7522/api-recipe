// const { User } = require("../models")

class CommentDTO {
    constructor({id, text, UserId, name, createdAt}) {
        this.id = id,
        this.text = text,
        this.userId = UserId,
        this.userName = name ? name : null;
        this.createdAt = new Date(createdAt).toLocaleString('fr')
    }
}

module.exports = { CommentDTO }