const CredentialService = require('../services/CredentialService.js')

// As said before, we're dealing with functions instead of classes
const createCredential = async (req, res) => {
    try {
        const data = req.body
        const credential = await CredentialService.createCredential(data)
        res.status(201).json({ credential })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const credentialAlreadyExists = async (req, res) => {
    try {
        const { email } = req.params
        const credential = await CredentialService.credentialAlreadyExists(email)
        res.status(200).json({ credential })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const updatePassword = async (req, res) => {
    try {
        const data = req.body
        const credential = await CredentialService.updatePassword(data)
        res.status(200).json({ credential })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const deleteCredential = async (req, res) => {
    try {
        const { email } = req.params
        const credential = await CredentialService.deleteCredential(email)
        res.status(200).json({ message: ("Credential deleted", credential) })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createCredential,
    credentialAlreadyExists,
    updatePassword,
    deleteCredential
}