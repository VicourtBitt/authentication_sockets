import jwt from 'jsonwebtoken'
import TokenService from '../services/TokenService.js'
const tokenService = new TokenService()

/**
 * This function will authenticate the user by checking if the token
 * is valid. If it's valid, it'll return the user information to the
 * next function.
 * 
 */
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return res.status(401).json({ error: 'Not authorizated' })

    jwt.verify(token, process.env.JWT_ACCESS_STRING_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token not valid' })

        req.user = user
        next()
    })
}

/**
 * This function will authenticate the user by checking if the refresh token
 * is valid. If it's valid, it'll return the user information to the next function.
 * 
 */
const authenticateRefreshJWT = (req, res, next) => {
    const token = req.cookies.refresh_token
    const userId = req.params.userId
    const tokenOnDb = tokenService.verifyRefreshToken({ token, userId })

    if (!token) return res.status(401).json({ error: 'Not authorizated' })
    if (!tokenOnDb) return res.status(401).json({ error: 'Token not valid' })

    jwt.verify(token, process.env.JWT_REFRESH_STRING_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token not valid' })

        req.user = user
        next()
    })
}

export { 
    authenticateJWT, 
    authenticateRefreshJWT
}