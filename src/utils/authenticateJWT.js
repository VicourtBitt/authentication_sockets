import jwt from 'jsonwebtoken'

const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']
    if (!token) return res.status(401).json({ error: 'Not authorizated' })

    jwt.verify(token, process.env.JWT_ACCESS_STRING_KEY, (err, user) => {
        if (err) return res.status(403).json({ error: 'Token not valid' })

        req.user = user
        next()
    })
}

export default authenticateJWT