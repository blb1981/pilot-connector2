const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')

class User extends Model {}

User.init(
  {
    companyContact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactMethod: {
      type: DataTypes.ENUM,
      values: ['phone', 'email'],
    },
    phone: {
      type: DataTypes.NUMBER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: false,
        len: {
          args: [8, 200],
          msg: 'Must be 8 characters or more.'
        }
        
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    paranoid: true,
  }
)

module.exports = User
