require('dotenv').config();

const { Router } = require('express');

const UserController = require('../controller/UserController');
const userController = new UserController();
const routes = Router();

// This function serves to authenticate the JWT Access Token
const authenticateJWT = require('../utils/authenticateJWT');

routes.post(`${process.env.POST_ONLY_USER}`, userController.createUser);
routes.post(`${process.env.POST_USER}`, userController.createFullRegister);
routes.get(`${process.env.GET_USER}`, userController.findUserById);
routes.get(`${process.env.GET_ALL_USERS}`, userController.findAllUsers);
routes.delete(`${process.env.DELETE_USER}`, authenticateJWT, userController.deleteUser);

module.exports = routes;