import dotenv from 'dotenv';
import { Router } from 'express';
import UserController from '../controller/UserController.js';
import { authenticateJWT } from '../utils/authenticateJWT.js';

const userController = new UserController();
const routes = Router();

// This function serves to authenticate the JWT Access Token

dotenv.config();

// This route should only be used in debug/development mode, it'll create a new user
// routes.post(`${process.env.POST_ONLY_USER}`, userController.createUser);

routes.post(`${process.env.POST_USER}`, userController.createFullRegister);
routes.get(`${process.env.GET_USER}`, userController.findUserById);
routes.get(`${process.env.GET_ALL_USERS}`, userController.findAllUsers);
routes.delete(`${process.env.DELETE_USER}`, authenticateJWT, userController.deleteUser);

export default routes;
