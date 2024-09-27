import express from 'express';
import routes from './router/index.js';

const appDB = express();
routes(appDB);

export default appDB;