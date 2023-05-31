const { Sequelize, ModelStatic, DataTypes } = require("sequelize");

/**
 * @param { Sequelize } sequelize
 * @returns { ModelStatic<any> }
 */
module.exports = (sequelize) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: "UK_recipe_name",
        validate: {
          notNull: true,
          notEmpty: true,
          len: [1, 50],
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: false,
          notEmpty: false,
        },
      },
      image: {
        type: DataTypes.STRING,
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
      
      
    },
   
  );
  return Recipe;
};
