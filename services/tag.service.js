const { TagDTO } = require("../DTO/tag.dto");
const db = require("../models");


const tagService = {
    getAll: async() => {
        const {rows, count } = await db.Tag.findAndCountAll({
            distinct: true
        })

        return {
            tags: rows.map(t => new TagDTO(t)),
            count
        }
    },
    getById: async(id) => {
        const tag = await db.Tag.findByPk(id);
        return tag ? new TagDTO(tag) : null;
    },
    create: async(tagToCreate) => {
        const tag = await db.Tag.create(tagToCreate);
        return tag ? new TagDTO(tag): null;
    },
    update: async(id, changement) => {
        const tagToUpdate = await db.Tag.update(changement, {
            where: { id }
        })

        const tagUpdated = await db.Tag.findByPk(id)
        return tagUpdated
    },
    delete: async(id) => {
        const isDeleted = await db.Tag.destroy({where : { id }});
        return isDeleted === 1;

    },
};

module.exports= tagService;