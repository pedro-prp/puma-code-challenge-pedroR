const { Router } = require('express')

const favoriteController = require('../controller/favoriteUser')

const favoriteRouter = Router()

favoriteRouter.get('/', favoriteController.index)

module.exports = favoriteRouter