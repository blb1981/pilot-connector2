const User = require('../models/User')

const apiResponse = require('../utils/apiResponse')

// Hard delete
exports.deleteHard = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { paranoid: false })

    if (!user) {
      return apiResponse(res, 400, 'User not found')
    }

    await user.destroy({ force: true })
    apiResponse(res, 200, 'User hard deleted', null)
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}

// Get all including soft delete
exports.getAllSoft = async (req, res) => {
  try {
    const users = await User.findAll({ paranoid: false })
    apiResponse(res, 200, 'List of all users, including soft deleted', users)
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}

// Get all
exports.getAll = async (req, res) => {
  const { orderBy, order, limit, offset } = req.query
  console.log(req.query)
  // TODO: Finish query parameters filtering

  try {
    const users = await User.findAll()
    apiResponse(res, 200, 'List of all users', users)
  } catch (error) {
    console.log(error)
    apiResponse(res, 500, 'Server error', error)
  }
}

// Create
exports.createOne = async (req, res) => {
  try {
    const user = await User.create(req.body)
    apiResponse(res, 201, 'User created', [user])
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}

// Get single
exports.getOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) {
      return apiResponse(res, 400, 'User not found')
    }

    apiResponse(res, 200, 'Single user', [user])
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}

// Update single
exports.updateOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) {
      return apiResponse(res, 400, 'User not found')
    }

    const updatedUser = await user.update(req.body)
    apiResponse(res, 200, 'User updated', [updatedUser])
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}

// Delete single
exports.deleteOne = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id)

    if (!user) {
      return apiResponse(res, 200, 'User not found')
    }

    await user.destroy()
    apiResponse(res, 200, 'User deleted', null)
  } catch (error) {
    apiResponse(res, 500, 'Server error', null)
  }
}
