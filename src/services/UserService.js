import { prisma } from '../config/database.js'

class UserService {
    // This route will create the user in the database, but only
    // the UserInfo, not the credentials yet
    async createUser (data) {
        const { name, cpf_cnpj } = data
        return prisma.user.create({
            data: {
                name,
                cpf_cnpj
            }
        })
    }

    async findUserById (id) {
        return prisma.user.findUnique({
            where: { id }
        })
    }

    // Function that gather all the users in the database
    async findAllUsers () {
        return prisma.user.findMany()
    }

    // Function that will delete the user from the database
    async deleteUser (cpf_cnpj) {
        return prisma.user.delete({
            where: { cpf_cnpj }
        })
    }
}

export default UserService