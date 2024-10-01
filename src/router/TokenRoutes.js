import dotenv from 'dotenv';
import TokenController from '../controller/TokenController.js';
import { authenticateJWT } from '../utils/authenticateJWT.js';
import { Router } from 'express';

dotenv.config();
const tokenController = new TokenController();
const routes = Router();

routes.post(`${process.env.POST_NEW_LOGIN}`, tokenController.createTokens);
routes.post(`${process.env.POST_NEW_ACCESS}`, authenticateJWT, tokenController.createAccessToken);
routes.patch(`${process.env.PATCH_NEW_REFRESH}`, authenticateJWT, tokenController.updateRefreshTokenInDB);

export default routes;