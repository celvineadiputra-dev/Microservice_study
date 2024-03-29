require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/services/index');
const usersRouter = require('./routes/services/users');
const courseRouter = require('./routes/services/courses');
const mediaRouter = require('./routes/services/media');
const paymentRouter = require('./routes/services/payments');
const orderRouter = require('./routes/services/orders');
const refreshTokenRouter = require('./routes/services/refreshTokens');

const verifyToken = require('./middlewares/verifyToken');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/course', verifyToken ,courseRouter);
app.use('/media', mediaRouter);
app.use('/payment', paymentRouter);
app.use('/order', orderRouter);
app.use('/refresh-token', refreshTokenRouter);

module.exports = app;
