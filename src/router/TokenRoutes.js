const authenticateJWT = require('../utils/authenticateJWT');
const TokenController = require('../controller/TokenController.js');
const tokenController = new TokenController();
const { Router } = require('express');
const routes = Router();

routes.post('/token', tokenController.createTokens);
// need to insert a middleware and a refreshtoken route
routes.post('/token/access', tokenController.createAccessToken);
routes.patch('/token', tokenController.updateRefreshTokenInDB);

module.exports = routes;