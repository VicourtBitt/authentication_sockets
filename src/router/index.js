import express from 'express';

// Creating the cors configuration, to give the
// permissions from others origins
import cors from 'cors';
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
}

// Import the routes from each specific model
import user from './UserRoutes.js';
import credential from './CredentialRoutes.js';
import tokens from './TokenRoutes.js';

// Exporting the server configuration and it's
// middlewares
export default (appDB) => { 
    appDB.use(
        express.json(),
        cors(corsOptions),
        user,
        credential,
        tokens
    )
}