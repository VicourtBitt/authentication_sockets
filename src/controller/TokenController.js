const TokenService = require('../services/TokenService')
const tokenService = new TokenService()

// This is the configuration for the access token cookie
const configAccessToken = {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: process.env.ACCESS_COOKIE_LIFETIME
}

class TokenController {

    // This controller function create both tokens
    async createTokens (req, res) {
        try {
            const data = req.body
            const token = await tokenService.createTokens(data)
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
            const token = await tokenService.createAccessToken(data)
            res.cookie('access_token', token, configAccessToken)
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
            await tokenService.updateRefreshTokenInDB(data)
            res.status(201).json({ message: 'Refresh token updated' })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = TokenController;