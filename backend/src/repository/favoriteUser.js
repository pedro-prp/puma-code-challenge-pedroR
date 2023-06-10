const db = []



const findAll = () => {
    return db
}

const insertOne = (data) => {
    db.push(data)
}

const deleteOne = (index) => {
    db.splice(index, 1)
}

module.exports = {
    findAll,
    insertOne,
    deleteOne
}