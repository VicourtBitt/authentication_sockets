import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';
import { authenticateJWT } from '../utils/authenticateJWT.js';
import CredentialController from '../controller/CredentialController.js';
const credentialController = new CredentialController();

const routes = Router();

routes.get(`${process.env.GET_EXISTING_CREDENTIALS}`, credentialController.credentialAlreadyExists);

// This route should only be used in debug/development mode, it'll create a new credential
// and serve as component testing
// routes.post(`${process.env.POST_CREDENTIAL}`, authenticateJWT, credentialController.createCredential);

// The routes below are protected by the JWT
routes.patch(`${process.env.PATCH_CREDENTIALS}`, authenticateJWT, credentialController.updatePassword);
routes.delete(`${process.env.DELETE_CREDENTIALS}`, authenticateJWT, credentialController.deleteCredential);

export default routes;