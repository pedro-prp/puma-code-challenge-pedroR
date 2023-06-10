const { Request, Response } = require('express')
const favoriteRepository = require('../repository/favoriteUser')


const index = (request, response) => {
    const users = favoriteRepository.findAll()

    console.log(users)

    return response.status(200).json(users)
}

const create = (request, response) => {
    const users = favoriteRepository.findAll()

    const data = request.body

    if (users.length == 5) {
        return response.status(400).json(
            {
                "error": `O limite de usuários favoritos é 5. Não foi possível inserir o usuário: ${data.user}`
            }
        )
    }

    if (users.length != 0) {

        users.forEach(element => {
            if (element.name == data.name) {
                return response.status(400).json(
                    {
                        "error": `O usuário: ${data.user} já existe. Não é possível inserir`
                    }
                )
            }
        });
    }


    favoriteRepository.insertOne(data)

    return response.status(201).json("created")
}

module.exports = {
    index,
    create
}