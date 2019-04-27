const express = require('express');
const path = require('path');
//const createError =require('http-errors');
//const cookieParser = require('cookie-parser');
const createError = require('http-errors');
const logger = require('morgan');
require('./db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use((req,res,next)=>{
    next(createError(404));
});

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    console.log(err);
    res.send(err);
});

module.exports = app;
