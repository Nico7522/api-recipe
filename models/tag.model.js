const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
    const Tag = sequelize.define('Tag', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isIn: [["Vegan", "Starter", "Main course", "Dessert", "Healthy", "Sweet", "Fat", "Hight-protein"]]
            }
        }
    },
    {
        tableName: "Tag"
    })
    return Tag
}