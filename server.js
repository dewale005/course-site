const express = require('express');
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();
const server = express();
const env = process.env;

server.use(app)


server.listen(env.PORT, () => {
    console.log("Server is listening on port", env.PORT)
})
