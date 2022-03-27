const apiResponse = require('./apiResponse')
const errorResponse = require('./errorResponse')

// Hard delete
exports.deleteHard = async (Model, req, res, resourceName) => {
  try {
    const result = await Model.findByPk(req.params.id, { paranoid: false })

    if (!result) {
      return apiResponse(res, 400, `${resourceName} not found`)
    }

    await result.destroy({ force: true })
    apiResponse(res, 200, `${resourceName} hard deleted`, null)
  } catch (error) {
    errorResponse(res, error)
  }
}

// Get all, including soft deleted
exports.getAllSoft = async (Model, req, res, resourceName) => {
  try {
    const results = await Model.findAll({ paranoid: false })
    apiResponse(
      res,
      200,
      `List of all resource - ${resourceName}, including soft deleted`,
      results
    )
  } catch (error) {
    errorResponse(res, error)
  }
}

// No findAll function

// Create
exports.createOne = async (Model, req, res, resourceName) => {
  try {
    const resource = await Model.create(req.body)
    apiResponse(res, 201, `${resourceName} created`, [resource])
  } catch (error) {
    errorResponse(res, error)
  }
}

// Get single
exports.getOne = async (Model, req, res, resourceName) => {
  try {
    const result = await Model.findByPk(req.params.id)

    if (!result) {
      return apiResponse(res, 400, `${resourceName} not found`)
    }

    apiResponse(res, 200, `Single ${resourceName}`, [result])
  } catch (error) {
    errorResponse(res, error)
  }
}

// Update single
exports.updateOne = async (Model, req, res, resourceName) => {
  try {
    const resource = await Model.findByPk(req.params.id)

    if (!resource) {
      return apiResponse(res, 400, `${resourceName} not found`)
    }

    const updatedResource = await resource.update(req.body)
    apiResponse(res, 200, `${resourceName} updated`, [updatedResource])
  } catch (error) {
    errorResponse(res, error)
  }
}

// Delete single
exports.deleteOne = async (Model, req, res, resourceName) => {
  try {
    const resource = await Model.findByPk(req.params.id)

    if (!resource) {
      return apiResponse(res, 200, `${resourceName} not found`)
    }

    await resource.destroy()
    apiResponse(res, 200, `${resourceName} deleted`, null)
  } catch (error) {
    errorResponse(res, error)
  }
}
