import { prisma } from '../config/database.js'


/**
 * CredentialService is a class that will handle the creation, deletion and update of the user credentials.
 * 
 * @function createCredential This function will create a new user credential.
 * @function credentialAlreadyExists This function will check if the credentials already exists in our database
 * @function updatePassword This function will update the password credentials of the user
 * @function deleteCredential This function will delete the credentials of the user
 */
class CredentialService {

    /**
     * This function will create a new user credential.
     * 
     * @param {object} data This is the data object that will be used to create the credentials
     * @param {string} data.email This is the user email
     * @param {string} data.password This is the user hashed password (for security reasons)
     * @param {number} data.userId This is the userId of the current user trying to auth
     *  
     * @returns {Object} This function will return the new user credentials
     */
    async createCredential (data) {
        const { email, password, userId } = data
        const newUser = prisma.credentials.create({
            data: {
                email,
                password,
                userId
            }
        })
        return newUser
    }

    /**
     * Will verify if the credentials already exists in our database
     * 
     * @param {*} email The email of the user
     * @returns 
     */
    async credentialAlreadyExists (email) {
        const credential = await prisma.credentials.findUnique({
            where: { email }
        })
        return credential
    }

    /**
     * Will update the password of the user
     * 
     * @param {object} data Objects passed to the function
     * @param {string} data.email User email
     * @param {string} data.password User hashed password
     * 
     * @returns 
     */
    async updatePassword (data) {
        const { email, password } = data
        return prisma.credentials.update({
            where: { email },
            data: { password }
        })
    }

    /**
     * Will delete the credentials of the user
     * 
     * @param {string} email The email of the user
     * 
     * @returns 
     */
    async deleteCredential (email) {
        return prisma.credentials.delete({
            where: { email }
        })
    }
}

export default CredentialService