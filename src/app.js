const express = require('express');
const logger = require('morgan');
const restRouter = require('./resources');

const app = express();

app.use(logger('common'));
app.use('/api/v1', restRouter);

app.use('/', (req, res) => {
    return res.status(200).send('Welcome to my course site')
})

module.exports = app;