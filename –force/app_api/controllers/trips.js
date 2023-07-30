const createError = require('http-errors');
const express = require('express');
const path = require.path('path');
const cookieParsers = require('cookie-parser');
const logger = require('morgan');
const hbs = require('hbs');
require('./app_api/models/db');

const indexRouter = require('./app_api/models/index');
const usersRouter = require('./app_api/models/users');
const travelRouter = require('./app_api/models/travel');
const apiRouter = require('./app_api/models/index');


const app = express();

app.set('views', path.join(_dirname, 'app_server', 'vievs'));

hbs.registerPartials(path.join(_dirname, 'app_server', 'views/partials'));

app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: falce}));
app.use(cookieParsers());
app.use(express.static(path.join(_dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/travel', travelRouter);
app.use('/api', apiRouter);

app.use(function(req, res, next) {
    next(createError(404));
})