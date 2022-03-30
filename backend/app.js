const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

const sequelize = require('./database/db')
const sync = async () => {
  try {
    await sequelize.sync()
    console.log('Database connected')
  } catch (error) {
    console.log('Unable to connect to the database')
    console.log(error)
  }
}
sync()

const userRoutes = require('./routes/users')
const jobRoutes = require('./routes/jobs')
const authRoutes = require('./routes/auth')

const apiResponse = require('./utils/apiResponse')

app.use(cors())
app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/auth', authRoutes)

app.use('/', express.static(path.join(__dirname, '../', 'build')))

app.get('/api', (req, res) => {
  apiResponse(res, 200, 'API is working', null)
})

module.exports = app
