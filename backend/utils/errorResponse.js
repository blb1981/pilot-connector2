const apiResponse = require('./apiResponse')

const errorResponse = (res, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(error)
    apiResponse(res, 500, 'Server error', error)
  } else {
    apiResponse(res, 500, 'Server error')
  }
}
module.exports = errorResponse
