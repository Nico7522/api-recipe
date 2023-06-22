const { Sequelize, ModelStatic, DataTypes } = require("sequelize");
const db = require(".");

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: "UK_recipe_name",
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 100],
        },
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        validate: {
          notNull: false,
          notEmpty: false,
        },
      },
      image: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
        defaultValue: "/images/recipe/recipedefault.jpg",
        validate: {
            notNull: true,
            notEmpty: true,
           
        },
      },
      valid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          notNull: true,
          notEmpty: true,
          isIn: [[true, false]],
          
        },
        
      },
      // comments: {
      //   type: DataTypes.INTEGER,
      //   references: {
      //       model: 'Comments',
      //       key: 'id'
      //     },
      //     onDelete: 'CASCADE'
      // },
  
     
     
      // ingredients[]
      // comments[]
    },
    {
      tableName: "Recipe",
      paranoid: false,
      // hooks: {
      //   afterDestroy: function (instance, options) {
      //     const Comment = db.Comment;
      //     console.log(Comment);
      //     Comment.destroy({
      //       where: {RecipeId: instance.id}
      //     })
      //   }
      // }
      
      
    },
   
  );
  return Recipe;
};
