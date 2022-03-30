const { DataTypes, Model } = require('sequelize')
const sequelize = require('../database/db')
const User = require('./User')

class Job extends Model {}

Job.init(
  {
    headline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    modelName: 'Job',
    paranoid: true,
    tableName: 'jobs',
  }
)

Job.belongsTo(User, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })

module.exports = Job
