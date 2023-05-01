class RecipeDTO {
    constructor({id, name, description, image, valid, createdAt}) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.imgURL = image,
        this.valid = valid,
        this.creationDate = new Date(createdAt).toLocaleString('fr');
    }
}

module.exports = { RecipeDTO };