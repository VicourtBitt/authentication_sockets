const express = require('express');
const { prismaConnection } = require('./config/database.js');

const prismaDB = express()

prismaDB.listen(3000, () => {
    console.log('Server running on port 3000')
    prismaConnection()
})