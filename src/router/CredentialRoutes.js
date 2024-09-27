import dotenv from 'dotenv';
dotenv.config();

import { Router } from 'express';
import authenticateJWT from '../utils/authenticateJWT.js';
import CredentialController from '../controller/CredentialController.js';
const credentialController = new CredentialController();

const routes = Router();

routes.get(`${process.env.GET_EXISTING_CREDENTIALS}`, credentialController.credentialAlreadyExists);

// Probably we won't need this route, but it's here just in case
// routes.post('/credential', credentialController.createCredential);

// The routes below are protected by the JWT
routes.patch(`${process.env.PATCH_CREDENTIALS}`, authenticateJWT, credentialController.updatePassword);
routes.delete(`${process.env.DELETE_CREDENTIALS}`, authenticateJWT, credentialController.deleteCredential);

export default routes;