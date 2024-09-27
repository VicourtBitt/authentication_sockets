import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.use(
    express.static('assets'),
    express.static('public'),
    express.static('protected')
)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/views/index.html')
})

app.listen(`${process.env.EXP_FE_PORT}`, () => {
    console.log(`Server running on port ${process.env.EXP_FE_PORT}`)
})