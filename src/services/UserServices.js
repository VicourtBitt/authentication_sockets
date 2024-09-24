const prisma = require('../config/database.js')

class UserService {
    constructor () {
        this.prisma = prisma
    }

    async createUser(data) {
        const { name, cpf_cnpj, email, password } = data
        return this.prisma.user.create({
            name,
            cpf_cnpj
        })
    }

    async findUserByCpfCnpj(cpf_cnpj) {
        return this.prisma.user.findUnique({
            where: { cpf_cnpj }
        })
    }

    async findUserByName(name) {
        return this.prisma.user.findUnique({
            where: { name }
        })
    }

    async updateUser(data) {
        const { cpf_cnpj, name } = data
        return this.prisma.user.update({
            where: { cpf_cnpj },
            data: { name }
        })
    }

    async deleteUser(cpf_cnpj) {
        return this.prisma.user.delete({
            where: { cpf_cnpj }
        })
    }
}

module.exports = UserService