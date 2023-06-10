const { Router } = require('express')

const favoriteController = require('../controller/favoriteUser')

const favoriteRouter = Router()

favoriteRouter.get('/users/', favoriteController.index)
favoriteRouter.post('/users/', favoriteController.create)
favoriteRouter.delete('/users/:username', favoriteController.deleteOne)
favoriteRouter.patch('/users/:username/toogle-star/', favoriteController.toogleFavorite)


module.exports = favoriteRouter