const UserServices = require('../services/UserServices')

const createUser = async (req, res) => {
    try {
        const data = req.body
        const user = await UserServices.createUser(data)
        res.status(201).json({ user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const findAllUsers = async (req, res) => {
    try {
        const users = await UserServices.findAllUsers()
        res.status(200).json({ users })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { cpf_cnpj } = req.params
        const user = await UserServices.deleteUser(cpf_cnpj)
        res.status(200).json({ message: ("User deleted", user) })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createUser,
    findAllUsers,
    deleteUser
}