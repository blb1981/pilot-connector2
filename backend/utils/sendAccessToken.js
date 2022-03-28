const apiResponse = require('./apiResponse')

const sendAccessToken = (req, res, accessToken, data) => {
  return apiResponse(res, 200, 'Login successful', {
    ...data,
    accessToken,
  })
}

module.exports = sendAccessToken
