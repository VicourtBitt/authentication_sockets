const { prisma } = require('../config/database.js')

// Dealing with functions instead of classes again
const createUser = async (data) => {
    const { name, cpf_cnpj, email, password } = data
    return prisma.User.create({
        data: {
            name,
            cpf_cnpj
        },  
    })
}

const findAllUsers = async () => {
    return prisma.User.findMany()
}

const deleteUser = async (cpf_cnpj) => {
    return prisma.User.delete({
        where: { cpf_cnpj }
    })
}

module.exports = {
    createUser,
    findAllUsers,
    deleteUser
}