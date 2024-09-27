require('dotenv').config();

const { Router } = require('express');
const authenticateJWT = require('../utils/authenticateJWT');
const CredentialController = require('../controller/CredentialController');
const credentialController = new CredentialController();

const routes = Router();

routes.get('/credential', credentialController.credentialAlreadyExists);

// Probably we won't need this route, but it's here just in case
// routes.post('/credential', credentialController.createCredential);

// The routes below are protected by the JWT
routes.patch('/credential', authenticateJWT, credentialController.updatePassword);
routes.delete('/credential/:email', authenticateJWT, credentialController.deleteCredential);

module.exports = routes;