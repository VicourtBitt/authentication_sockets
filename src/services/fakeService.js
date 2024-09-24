const { prisma } = require('../config/database.js')

class FakeService {
    // Remover instancia **
    constructor () {
        this.prisma = prisma
    }

    async createUser(data) {
        const { name, cpf_cnpj, email, password } = data
        return this.prisma.User.create({
            data: {
                name,
                cpf_cnpj
            },  
        })
    }
}

