const { Request, Response } = require('express')
const favoriteRepository = require('../repository/favoriteUser')


const index = (request, response) => {
    const users = favoriteRepository.findAll()

    console.log(users)

    return response.status(200).json(users)
}

module.exports = {
    index
}