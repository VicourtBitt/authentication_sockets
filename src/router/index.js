const express = require('express');

const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
}

const user = require('./UserRoutes.js');
const credential = require('./CredentialRoutes.js');
const fake = require('./fakeRoutes.js');

module.exports = appDB => {
    appDB.use(
        express.json(),
        cors(corsOptions),
        user,
        credential, 
        fake
    )
}