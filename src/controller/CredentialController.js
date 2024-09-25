const CredentialService = require('../services/CredentialService.js')
const credentialService = new CredentialService()

class CredentialController {
    async createCredential (req, res) {
        try {
            const data = req.body
            const credential = await credentialService.createCredential(data)
            res.status(201).json({ credential })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async credentialAlreadyExists (req, res) {
        try {
            const { email } = req.params
            const credential = await credentialService.credentialAlreadyExists(email)
            res.status(200).json({ credential })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async updatePassword (req, res) {
        try {
            const data = req.body
            const credential = await credentialService.updatePassword(data)
            res.status(200).json({ credential })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }

    async deleteCredential (req, res) {
        try {
            const { email } = req.params
            const credential = await credentialService.deleteCredential(email)
            res.status(200).json({ message: ("Credential deleted", credential) })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = CredentialController