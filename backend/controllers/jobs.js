const { Op } = require('sequelize')

const Job = require('../models/Job')
const User = require('../models/User')
const modelFactory = require('../utils/modelFactory')
const apiResponse = require('../utils/apiResponse')
const errorResponse = require('../utils/errorResponse')

// Hard delete
exports.deleteHard = async (req, res) => {
  await modelFactory.deleteHard(Job, req, res, 'Job')
}

// Get all including soft delete
exports.getAllSoft = async (req, res) => {
  await modelFactory.getAllSoft(Job, req, res, 'Job')
}

// Get total job count
exports.getCount = async (req, res) => {
  await modelFactory.getCount(Job, req, res, 'Job')
}

exports.getAll = async (req, res) => {
  // Destructure query parameters, set default values
  const {
    sortBy = 'id',
    order = 'ASC',
    offset = 0,
    limit,
    search = '',
  } = req.query

  try {
    // Find all, allow text search through headlines and descriptions
    const jobs = await Job.findAndCountAll({
      where: {
        [Op.or]: {
          headline: { [Op.substring]: search },
          description: { [Op.substring]: search },
        },
      },
      order: [[sortBy, order]],
      limit,
      offset,
      include: User,
    })

    apiResponse(res, 200, 'List of all jobs', {
      count: jobs.length,
      results: jobs,
    })
  } catch (error) {
    errorResponse(res, error)
  }
}

// Create
exports.createOne = async (req, res) => {
  await modelFactory.createOne(Job, req, res, 'Job')
}

// Get single
exports.getOne = async (req, res) => {
  await modelFactory.getOne(Job, req, res, 'Job')
}

// Update single
exports.updateOne = async (req, res) => {
  await modelFactory.updateOne(Job, req, res, 'Job')
}

// Delete single
exports.deleteOne = async (req, res) => {
  await modelFactory.deleteOne(Job, req, res, 'Job')
}
