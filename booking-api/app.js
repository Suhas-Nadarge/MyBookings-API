
var createError = require('http-errors');

var express = require('express');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dbConfig = require("./app/config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = require("./app/model");
var cors = require('cors');

db.mongoose = mongoose;
db.url = dbConfig.url;
// db.user = require("./app/model/user.model.js")(mongoose);
module.exports = db;
const bodyParser = require('body-parser')

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// var server = app.listen(3000);

const io = require('socket.io')({
    cors: {
      origin: '*',
    }
  }); 

  app.use(cors({
    origin: 'https://localhost:4200/'
  }));

require('./web-socket/index')(io)            


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.all('/*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   next();
});




module.exports = { app, io }; 
