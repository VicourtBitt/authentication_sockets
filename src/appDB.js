const express = require('express');
const routes = require('./router/index.js');

const appDB = express();
routes(appDB);

module.exports = appDB;