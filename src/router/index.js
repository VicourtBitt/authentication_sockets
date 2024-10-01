import express from 'express';

// Importing the cookie-parser to handle the cookies
// interactions client-to-server (headache)
import cookieParser from 'cookie-parser';

// Creating the cors configuration, to give the
// permissions from others origins
import cors from 'cors';
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT','DELETE']
}

// Import the routes from each specific model
import user from './UserRoutes.js';
import credential from './CredentialRoutes.js';
import tokens from './TokenRoutes.js';

// Exporting the server configuration and it's
// middlewares
export default (appDB) => { 
    appDB.use(
        cookieParser(),
        cors(corsOptions),
        express.json(),
        user,
        credential,
        tokens
    )
}