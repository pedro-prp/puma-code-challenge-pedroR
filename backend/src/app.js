const express = require('express')
const cors = require('cors')

const favoriterouter = require('./route/favoriteuser')

const app = express()

app.use(cors())
app.use(express.json())
app.use(favoriterouter)

module.exports = app