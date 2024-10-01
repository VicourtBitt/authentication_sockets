import dotenv from 'dotenv'
dotenv.config()

import jwt from 'jsonwebtoken'
import { prisma } from '../config/database.js'

class TokenService {
    
    /**
     * This function will create both tokens, both will be stored as httpOnly cookies
     * (refresh token will be stored in the database as well). It'll access the prisma
     * model and check if the user already has a refresh token, if it does, it'll return
     * the access token and the refresh token. If it doesn't, it'll create a new refresh
     * token and return both.
     * 
     * @param {object} data This is the data object that will be used to create the tokens
     * @param {string} data.name This is the name of the current user trying to auth
     * @param {number} data.userId This is the userId of the current user trying to auth
     * 
     * @returns
     */
    async createTokens (data) {
        const { name, userId } = data
        const alreadyExists = await prisma.userToken.findUnique({
            where: {
                userId: userId
            }
        })
        if (alreadyExists) {
            const { refreshToken } = alreadyExists
            return { accessToken: await this.createAccessToken({name, userId}), refreshToken }
        }
        const refreshToken = await this.createRefreshToken({name, userId})
        const accessToken = await this.createAccessToken({name, userId})
        return { accessToken, refreshToken }
    }

    /**
     * This function will create a new access token, it'll be used when the user 
     * need to authenticate itself. It'll use the name and userId to create a secret
     * string, and then it'll create the token with the secret string and the JWT
     * access string key.
     * 
     * @param {object} data This is the data object that will be used to create the access token
     * @param {string} data.name This is the name of the current user trying to auth
     * @param {number} data.userId This is the userId of the current user trying to auth
     * 
     * @returns 
     */
    async createAccessToken (data) {
        const { name, userId } = data
        const userSecret = name.replace(' ', '') + userId
        
        const secretString = process.env.JWT_ACCESS_STRING_KEY
        
        return jwt.sign({ userSecret }, secretString, { expiresIn: '30m' })
    }

    /**
     * This function will verify the refresh token, it'll be used when the user
     * needs to authenticate itself. It'll check if the token is valid, if it's
     * not, it'll return false. If it is, it'll check if the token is expired,
     * if it is, it'll update the token in the database and return false. If it's
     * valid, it'll return true.
     * 
     * @param {*} data
     * @param {string} data.token
     * @param {number} data.userId
     *  
     * @returns 
     */
    async verifyRefreshToken (data) {
        const { token, userId } = data
        const currentTime = new Date(Date.now())
        const userToken = await prisma.userToken.findUnique({
            where: {
                userId: userId
            }
        })

        if (!userToken || userToken.refreshToken !== token) return false
        if (userToken.expirationDate < currentTime) {
            await this.updateRefreshTokenInDB({ name: userToken.userId, userId, token })
            return false
        }
        return true
    }

    /**
     * It's basically the same function as createAccessToken, but it'll create
     * a new refresh token.
     * 
     * @param {*} data
     * @param {string} data.name
     * @param {number} data.userId
     * 
     * @returns 
     */
    async createRefreshToken (data) {
        const { name, userId } = data
        const userSecret = name.replace(' ', '') + userId
        const secretString = process.env.JWT_REFRESH_STRING_KEY

        return jwt.sign({ userSecret }, secretString, { expiresIn: '2d' })
    }

    /**
     * This function will update the refresh token in the database, it'll be used
     * when the user needs to authenticate and the refresh token has expired.
     * 
     * @param {*} data 
     * @param {string} data.name
     * @param {number} data.userId
     * @param {string} data.token
     * 
     * @returns 
     */
    async updateRefreshTokenInDB (data) {
        const { name, userId, token } = data

        const update = await prisma.userToken.update({
            where: {
                refreshToken: token
            },
            data: {
                refreshToken: await this.createRefreshToken({ name, userId })
            }
        })

        return update
    }
}

export default TokenService