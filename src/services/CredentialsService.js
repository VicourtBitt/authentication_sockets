const prisma = require('../config/database.js')

class CredentialsService {
    constructor () {
        this.prisma = prisma
    }

    async createCredentials(data) {
        const { email, password } = data
        return this.prisma.credentials.create({
            email,
            password
        })
    }

    async alreadyExists(email) {
        return this.prisma.credentials.findUnique({
            where: { email }
        })
    }
    
    async updatePassword(data) {
        const { email, password } = data
        return this.prisma.credentials.update({
            where: { email },
            data: { password }
        })
    }
}

module.exports = CredentialsService