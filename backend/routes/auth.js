const express = require('express')
const { isEmpty } = require('lodash')
const router = express.Router()

const User = require('../models/User')
const apiResponse = require('../utils/apiResponse')
const errorResponse = require('../utils/errorResponse')
const sendAccessToken = require('../utils/sendAccessToken')
const sendRefreshToken = require('../utils/sendRefreshToken')

router.post('/login', async (req, res) => {
  try {
    // Check to make sure user exists
    const foundUser = await User.findOne({ where: { email: req.body.email } })
    if (!foundUser) {
      return apiResponse(res, 401, 'Invalid login')
    }

    // Verify password matches
    const isValidPassword = await foundUser.isValidPassword(req.body.password)
    if (!isValidPassword) {
      return apiResponse(res, 401, 'Invalid login')
    }

    // Create access and refresh tokens
    const accessToken = foundUser.createAccessToken()
    const refreshToken = foundUser.createRefreshToken()

    // Put refresh token in the database
    foundUser.refreshToken = refreshToken
    await foundUser.save()

    // Send refresh token as cookie, access token as regular response
    sendRefreshToken(res, refreshToken)
    sendAccessToken(req, res, accessToken, {
      user: foundUser,
    })
  } catch (error) {
    errorResponse(res, error)
  }
})

module.exports = router
