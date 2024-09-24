const { prisma } = require('../config/database.js')

// As said before, we're dealing with functions instead of classes
const createCredential = async (data) => {
    const { email, password, userId } = data
    return prisma.Credential.create({
        data: {
            email,
            password,
            userId
        }
    })
}

const credentialAlreadyExists = async (email) => {
    const credential = await prisma.Credential.findUnique({
        where: { email }
    })
    return credential
}

const updatePassword = async (data) => {
    const { email, password } = data
    return prisma.Credential.update({
        where: { email },
        data: { password }
    })
}

const deleteCredential = async (email) => {
    return prisma.Credential.delete({
        where: { email }
    })
}

module.exports = {
    createCredential,
    updatePassword,
    deleteCredential,
    credentialAlreadyExists
}