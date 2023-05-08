const { Sequelize, ModelStatic, DataTypes } = require('sequelize');

/** 
 * @param { Sequelize } sequelize
 * @returns {ModelStatic<any>} 
*/

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING(25),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [1, 25]
            }
        },
        surname: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                len: [1, 50]
            }
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true,
                isDate: true,
                customValidator() {
                    const date = new Date().getFullYear()
                    if (this.birthdate.getFullYear() > (date - 18) ) {
                        throw new Error('You must be adult') ;
                    }
                }
            }
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: "UK_user_email",
            validate: {
                notNull: true,
                notEmpty: true,
                isEmail: true,
                len: [1, 100],
                is: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                notNull: true,
                notEmpty: true,
                len: [8,100]
            }
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "/images/user/userdefault.jpg",
            validate: {
                notNull: true,
                notEmpty: true
            }
        },
        status: {
            type: DataTypes.STRING(14),
            allowNull: false,
            defaultValue: "User",
            validate: {
                notNull: true,
                notEmpty: true,
                isIn: [["User", "Certified user", "Admin"]],
                len: [1, 14]
            }
        }
    },
    {
        tableName: "User"
    })
    return User;
}