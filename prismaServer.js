require('dotenv').config();
const { prismaConnection } = require('././src/config/database.js');
const appDB = require('./src/appDB.js');

// The port that the server will run on
const PORT = process.env.EXP_PORT || 3000;

appDB.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    prismaConnection()
})