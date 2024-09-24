const TokenService = require('../service/TokenService.js');

class TokenController {
    constructor () {
        this.tokenService = new TokenService()
    }

    // This controller function create both tokens
    async createTokens (req, res) {
        try {
            const data = req.body
            const token = await this.tokenService.createTokens(data)
            res.status(200).json({ token })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }

    // This controller function create a new access token
    async createAccessToken (req, res) {
        try {
            const data = req.body
            const token = await this.tokenService.createAccessToken(data)
            res.status(200).json({ token })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }

    // I didn't test this specific function yet
    async updateRefreshTokenInDB (req, res) {
        try {
            const data = req.body
            await this.tokenService.updateRefreshTokenInDB(data)
            res.status(201).json({ message: 'Refresh token updated' })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = TokenController;