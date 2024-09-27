const { Router } = require('express');

// This function serves to authenticate the JWT Access Token
const authenticateJWT = require('../utils/authenticateJWT');

const UserController = require('../controller/UserController');
const userController = new UserController();
const routes = Router();

routes.post('/user', userController.createUser);
routes.post('/userfull', userController.createFullRegister);
routes.get('/user', userController.findAllUsers);
routes.delete('/user/:cpf_cnpj', authenticateJWT, userController.deleteUser);

module.exports = routes;