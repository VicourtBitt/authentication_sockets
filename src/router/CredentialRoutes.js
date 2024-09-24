const { Router } = require('express');
const CredentialController = require('../controller/CredentialController');

const routes = Router();

routes.get('/credential', CredentialController.credentialAlreadyExists);
routes.post('/credential', CredentialController.createCredential);
routes.patch('/credential', CredentialController.updatePassword);
routes.delete('/credential/:email', CredentialController.deleteCredential);

module.exports = routes;