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

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/course', courseRouter);
app.use('/media', mediaRouter);
app.use('/payment', paymentRouter);
app.use('/order', orderRouter);

module.exports = app;
