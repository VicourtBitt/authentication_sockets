require('dotenv').config();

const TokenController = require('../controller/TokenController.js');
const tokenController = new TokenController();
const authenticateJWT = require('../utils/authenticateJWT');
const { Router } = require('express');
const routes = Router();

routes.post('/token', tokenController.createTokens);
// need to insert a middleware and a refreshtoken route
routes.post('/token/access', tokenController.createAccessToken);
routes.patch('/token', tokenController.updateRefreshTokenInDB);

// To make this works, you'll need to insert the cookie on the "client-side", then
// it'll be visible in the request/response header
routes.get('/test', (req, res) => {
    // if (!req.headers['set-cookie']) return res.status(401).json({ message: 'No Cookie Registered' });
    return res.status(200).json({ message: res.headers});
});

module.exports = routes;