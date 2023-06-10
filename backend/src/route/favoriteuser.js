const { Router } = require('express')

const favoriteController = require('../controller/favoriteUser')

const favoriteRouter = Router()

favoriteRouter.get('/users/', favoriteController.index)
favoriteRouter.post('/users/', favoriteController.create)

module.exports = favoriteRouter