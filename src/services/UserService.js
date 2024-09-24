const { prisma } = require('../config/database.js')

class UserService {
    // Create only the user
    async createUser (data) {
        const { name, cpf_cnpj } = data
        return prisma.user.create({
            data: {
                name,
                cpf_cnpj
            }
        })
    }

    // Function that gather all the users
    async findAllUsers () {
        return prisma.user.findMany()
    }

    // Function that will delete the user
    async deleteUser (cpf_cnpj) {
        return prisma.user.delete({
            where: { cpf_cnpj }
        })
    }
}

module.exports = UserService