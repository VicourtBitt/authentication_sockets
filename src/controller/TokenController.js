import TokenService from '../services/TokenService.js'
import dotenv from 'dotenv'
dotenv.config()
const tokenService = new TokenService()

// This is the configuration for the access token cookie
const configAccessToken = {
    httpOnly: false,
    sameSite: 'strict',
    maxAge: process.env.ACCESS_COOKIE_LIFETIME,
    withCredentials: true
}

// This is the configuration for the refresh token cookie
const configRefreshToken = {
    httpOnly: false,
    sameSite: 'strict',
    maxAge: process.env.REF_TOKEN_LIFETIME,
    withCredentials: true
}

/**
 * This class will be used to create the tokens, and store them in the database
 * 
 * @function createTokens This function will create both tokens, and store the refresh token in the database
 * @function createAccessToken This function will create a new access token
 * @function updateRefreshTokenInDB This function will update the refresh token in the database
 */
class TokenController {

    /**
     * Call the TokenService to create the tokens, and store the refresh token in the database
     */
    async createTokens (req, res) {
        try {
            const data = req.body
            // It'll only return the access token, and the refresh token
            // will be stored in the database for future use
            const { accessToken, refreshToken} = await tokenService.createTokens(data)
            console.log(accessToken)
            console.log(refreshToken)

            // The access token will be stored in a cookie, and in the future
            // it'll be used to authenticate the user by using cookieParser
            
            res.cookie('access_token', accessToken, configAccessToken)
            res.cookie('refresh_token', refreshToken, configRefreshToken)
            res.status(200).json({ accessToken })
            // res.status(200).json({ accessToken })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }

    /**
     * Call the TokenService to create a new access token, and store it in a cookie
     */
    async createAccessToken (req, res) {
        try {
            const data = req.body
            console.log(data)
            const accessToken = await tokenService.createAccessToken(data)
            res.cookie('access_token', accessToken, configAccessToken)
            res.status(200).json({ accessToken })
        } catch (error) {
            // Change the error message in the future
            res.status(400).json({ error: error.message })
        }
    }

    /**
     * Call the TokenService to update the refresh token in the database
     * NOT TESTED YET
     */
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

export default TokenController;