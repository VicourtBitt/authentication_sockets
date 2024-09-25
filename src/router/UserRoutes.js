const { Router } = require('express');

const UserController = require('../controller/UserController');
const userController = new UserController();
const routes = Router();

routes.post('/user', userController.createUser);
routes.get('/user', userController.findAllUsers);
routes.delete('/user/:cpf_cnpj', userController.deleteUser);

module.exports = routes;