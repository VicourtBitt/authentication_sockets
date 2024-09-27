import dotenv from 'dotenv';
dotenv.config();

import { prismaConnection } from './src/config/database.js';
import appDB from './src/appDB.js';

// The port that the server will run on
const PORT = process.env.EXP_PORT || 3000;

appDB.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    prismaConnection()
})