const { DataTypes, Model } = require('sequelize')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const sequelize = require('../database/db')

class User extends Model {
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10)
  }

  async isValidPassword(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
  }

  createAccessToken() {
    return jwt.sign(
      { id: this.id, email: this.email, name: this.companyContact },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRES_IN,
      }
    )
  }

  createRefreshToken() {
    return jwt.sign(
      { id: this.id, email: this.email, name: this.companyContact },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
      }
    )
  }
}

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
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'User',
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['password, refreshToken'],
      },
    },
  }
)

module.exports = User
