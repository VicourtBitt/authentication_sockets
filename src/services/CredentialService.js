const { prisma } = require('../config/database.js')

// Trying to use Classes without the need to instantiate the prisma object
class CredentialService {
    // This route will create the credentials, which will be used in
    // the User Controller as well.
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

    // This route will check if the credentials already exists in
    // our database
    async credentialAlreadyExists (email) {
        const credential = await prisma.credentials.findUnique({
            where: { email }
        })
        return credential
    }

    // This route will update the password credentials of the user
    async updatePassword (data) {
        const { email, password } = data
        return prisma.credentials.update({
            where: { email },
            data: { password }
        })
    }

    // This route will delete the credentials of the user
    async deleteCredential (email) {
        return prisma.credentials.delete({
            where: { email }
        })
    }
}

module.exports = CredentialService