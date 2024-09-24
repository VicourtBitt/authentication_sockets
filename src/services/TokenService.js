require('dotenv').config()
const jwt = require('jsonwebtoken')
const prisma = require('../config/database.js')

class TokenService {
    constructor () {
        this.prisma = prisma
    }

    // This function will create both access and refresh tokens, it'll
    // be used when the user logs in the application
    async createTokens (data) {
        const { name, userId } = data
        const refreshToken = await this.createRefreshToken({name, userId})

        const refresh = await this.prisma.UserToken.create({
            data: {
                refreshToken: refreshToken,
                userId: userId
            }
        })

        const accessToken = await this.createAccessToken({name, userId})
        return accessToken
    }

    // This function will create a new access token, it'll be used when
    // the user's access token expires
    async createAccessToken (data) {
        const { name, userId } = data
        const userSecret = name.replace(' ', '') + userId

        const secretString = process.env.JWT_ACCESS_STRING_KEY
        
        return jwt.sign({ userSecret }, secretString, { expiresIn: '30m' })
    }

    // This function will create a new refresh token, it'll be used when
    async createRefreshToken (data) {
        const { name, userId } = data
        const userSecret = name.replace(' ', '') + userId

        const secretString = process.env.JWT_REFRESH_STRING_KEY

        return jwt.sign({ userSecret }, secretString, { expiresIn: '2d' })
    }

    // This function will update the refresh token in the database, it'll be
    // used when the user's refresh token expires
    async updateRefreshTokenInDB (data) {
        const { name, userId, token } = data

        const update = await this.prisma.UserToken.update({
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

module.exports = TokenService