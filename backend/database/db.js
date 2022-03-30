const { Sequelize, QueryInterface, DataTypes } = require('sequelize')
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './backend/database/db.sqlite',
//   logging: console.log,
// })
const sequelize = new Sequelize({
  dialect: 'mysql',
  database: 'pc',
  username: 'pc',
  password: 'password',
  logging: console.log,
})

module.exports = sequelize
