var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
//Add user routes
var usersRouter = require('./routes/users');

connection .then((db) => { console.log("Connected correctly to server"); }) .catch((err) => { console.log(err) }); 


var app = express();

//Database added
const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://stem:Prasadi1234@articlehub-g2doe.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});
connection .then((db) => { console.log("Connected correctly to server"); }) .catch((err) => { console.log(err) }); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
//Add user routes
app.use('/users', usersRouter);
//Add articles routes
var articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  /// render the error page
  res.status(err.status || 500);
  res.json({ errors: [{ msg: err.message }] }); // change render to json method
  res.render('error');
});

const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb+srv://stem:Prasadi1234@articlehub-g2doe.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});





module.exports = app;
