const sendRefreshToken = (res, refreshToken) => {
  res.cookie('rft', refreshToken, {
    httpOnly: true,
    path: '/refresh_token'
  })
}

module.exports = sendRefreshToken