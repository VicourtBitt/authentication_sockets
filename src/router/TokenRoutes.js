import dotenv from 'dotenv';
import TokenController from '../controller/TokenController.js';
import authenticateJWT from '../utils/authenticateJWT.js';
import { Router } from 'express';

dotenv.config();
const tokenController = new TokenController();
const routes = Router();

routes.post(`${process.env.POST_NEW_LOGIN}`, tokenController.createTokens);
// need to insert a middleware and a refreshtoken route
routes.post(`${process.env.POST_NEW_ACCESS}`, tokenController.createAccessToken);
routes.patch(`${process.env.PATCH_NEW_REFRESH}`, tokenController.updateRefreshTokenInDB);

// To make this works, you'll need to insert the cookie on the "client-side", then
// it'll be visible in the request/response header
routes.get('/test', (req, res) => {
    // if (!req.headers['set-cookie']) return res.status(401).json({ message: 'No Cookie Registered' });
    return res.status(200).json({ message: res.headers});
});

export default routes;