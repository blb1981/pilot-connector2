const express = require('express')
const router = express.Router()

const jobsController = require('../controllers/jobs')

// Hard delete
router.delete('/:id/hard', jobsController.deleteHard)

// Get all including soft deleted
router.get('/all', jobsController.getAllSoft)

router
  .route('/')

  // Get all
  .get(jobsController.getAll)

  // Create
  .post(jobsController.createOne)

router
  .route('/:id')

  // Get single
  .get(jobsController.getOne)

  // Update single
  .patch(jobsController.updateOne)

  // Soft delete
  .delete(jobsController.deleteOne)

module.exports = router
