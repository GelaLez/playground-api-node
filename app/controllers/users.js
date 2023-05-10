const { httpError } = require('../helpers/handleError')
const useModel = require('../models/users.js')


const getItems = async (req, res) => {
    try {
        const listAll = await userModel().find({})
        res.send({ data: listAll })
    } catch (error) {

    }
}

const getItem = async (req, res) => {

}

const createItem = async (req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await useModel.create({
            name, age, email
        })
        res.send({ data: resDetail })
    } catch (error) {

    }
}

const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = {
    getItem,
    getItems,
    deleteItem,
    createItem,
    updateItem
}