const { Op } = require('sequelize')

const User = require('../models/User')
const modelFactory = require('../utils/modelFactory')
const apiResponse = require('../utils/apiResponse')
const errorResponse = require('../utils/errorResponse')

// Hard delete
exports.deleteHard = async (req, res) => {
	await modelFactory.deleteHard(User, req, res, 'User')
}

// Get all including soft delete
exports.getAllSoft = async (req, res) => {
	await modelFactory.getAllSoft(User, req, res, 'User')
}

// Get all
/*
    Documentation on search queries
    Allowed parameters - sortBy, order, offset, limit, search
*/

exports.getAll = async (req, res) => {
	// Destructure query parameters, set default values
	const { sortBy = 'id', order = 'ASC', offset = 0, limit, search = '' } = req.query

	try {
		// Find all, allow text search through headlines and descriptions
		const users = await User.findAll({
			attributes: { exclude: ['password'] },
			where: {
				[Op.or]: {
					companyContact: { [Op.substring]: search },
					companyName: { [Op.substring]: search },
					phone: { [Op.substring]: search },
					email: { [Op.substring]: search },
				},
			},
			order: [[sortBy, order]],
			limit,
			offset,
		})

		apiResponse(res, 200, 'List of all users', {
			count: users.length,
			results: users,
		})
	} catch (error) {
		errorResponse(res, error)
	}
}

// Create/Register new user
exports.createOne = async (req, res) => {
	try {
		const userExists = await User.findOne({ where: { email: req.body.email } })
		if (userExists) {
			return apiResponse(res, 400, 'User already exists')
		}
		const newUser = User.build(req.body)
		await newUser.hashPassword()
		await newUser.save()
		apiResponse(res, 201, 'New user created', newUser)
	} catch (error) {
		errorResponse(res, error)
	}
}

// Get single
exports.getOne = async (req, res) => {
	try {
		const result = await User.findByPk(req.params.id, {
			attributes: { exclude: ['password'] },
		})

		if (!result) {
			return apiResponse(res, 400, `User not found`)
		}

		apiResponse(res, 200, `Single User`, [result])
	} catch (error) {
		errorResponse(res, error)
	}
}

// Update single
exports.updateOne = async (req, res) => {
	await modelFactory.updateOne(User, req, res, 'User')
}

// Delete single
exports.deleteOne = async (req, res) => {
	await modelFactory.deleteOne(User, req, res, 'User')
}
