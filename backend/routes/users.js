const express = require('express')
const router = express.Router()

const usersController = require('../controllers/users')

// Hard delete
router.delete('/:id/hard', usersController.deleteHard)

// Get all including soft deleted
router.get('/all', usersController.getAllSoft)

// Get total user count
router.get('/count', usersController.getCount)

router
	.route('/')

	// Get all
	.get(usersController.getAll)

	// Create
	.post(usersController.createOne)

router
	.route('/:id')

	// Get single
	.get(usersController.getOne)

	// Update single
	.patch(usersController.updateOne)

	// Soft delete
	.delete(usersController.deleteOne)

module.exports = router
