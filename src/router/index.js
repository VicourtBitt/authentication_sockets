const express = require('express');

// Creating the cors configuration, to give the
// permissions from others origins
const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
}

// Import the routes from each specific model
const user = require('./UserRoutes.js');
const credential = require('./CredentialRoutes.js');
const tokens = require('./TokenRoutes.js');

// Exporting the server configuration and it's
// middlewares
module.exports = appDB => {
    appDB.use(
        express.json(),
        cors(corsOptions),
        user,
        credential,
        tokens
    )
}