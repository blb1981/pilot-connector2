const { Sequelize, QueryInterface, DataTypes } = require('sequelize')
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './backend/database/db.sqlite',
//   logging: console.log,
// })
const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  logging: console.log,
})

module.exports = sequelize
