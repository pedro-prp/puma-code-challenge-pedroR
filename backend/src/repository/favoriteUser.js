const db = {
    "favorite_user": "",
    "users": []
}



const findAll = () => {
    return db
}

const insertOne = (data) => {
    db.users.push(data)
}

const deleteOne = (index) => {
    db.users.splice(index, 1)
}

const makeFavorite = (user) => {
    if (db.favorite_user == user) {
        db.favorite_user = ""
        return false
    } else {
        db.favorite_user = user
        return true
    }

}


module.exports = {
    findAll,
    insertOne,
    deleteOne,
    makeFavorite
}