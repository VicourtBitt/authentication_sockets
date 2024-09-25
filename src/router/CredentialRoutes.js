const { Router } = require('express');
const authenticateJWT = require('../utils/authenticateJWT');
const CredentialController = require('../controller/CredentialController');
const credentialController = new CredentialController();

const routes = Router();

routes.get('/credential', credentialController.credentialAlreadyExists);
routes.post('/credential', credentialController.createCredential);
routes.patch('/credential', authenticateJWT, credentialController.updatePassword);
routes.delete('/credential/:email', authenticateJWT, credentialController.deleteCredential);

module.exports = routes;