const db = []



const findAll = () => {
    return db
}

const insertOne = (data) => {
    db.push(data)
}

module.exports = {
    findAll,
    insertOne
}