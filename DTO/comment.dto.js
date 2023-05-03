class CommentDTO {
    constructor({id, name, status, MM_user_react_recipe}){
        this.id = id,
        this.name = name,
        this.status = status,
        this.reaction = MM_user_react_recipe.reaction
    }
}

module.exports = {CommentDTO}