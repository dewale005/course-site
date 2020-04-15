const express = require('express');
const { user } = require('./user.contoller');

const userRouter = express.Router()

userRouter.get('/', user);

module.exports = userRouter;