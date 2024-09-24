const { prisma } = require('../config/database.js')

// Trying to use Classes without the need to instantiate the prisma object
class CredentialService {
    async createCredential (data) {
        const { email, password, userId } = data
        return prisma.credentials.create({
            data: {
                email,
                password,
                userId
            }
        })
    }

    async credentialAlreadyExists (email) {
        const credential = await prisma.credentials.findUnique({
            where: { email }
        })
        return credential
    }

    async updatePassword (data) {
        const { email, password } = data
        return prisma.credentials.update({
            where: { email },
            data: { password }
        })
    }

    async deleteCredential (email) {
        return prisma.credentials.delete({
            where: { email }
        })
    }
}

module.exports = CredentialService