var express = require('express');
var router = express.Router();
var path = require('path');
var http = require('http');
var https = require('https');
var bodyParser = require('body-parser');
var books = require('./server/api/books');
var morgan     = require("morgan");

var app = express();
app.use(morgan("dev"));
app.use(express.static('../app'));
app.use(express.static(path.join(__dirname, 'app')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

// http://localhost:3000/books/search/
app.use('/books', books);

var EXPRESS_HTTPS_PORT = 8000;
var options = {};

http.createServer(app).listen(EXPRESS_HTTPS_PORT, function () {
    console.log('App started on https port ' + EXPRESS_HTTPS_PORT);
});
