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

// router.use(function (req, res, next){
// 	console.log('Hi');
// 	console.log(req.method, req.url);
// 	next();
// });

var EXPRESS_HTTPS_PORT = 8000;
var options = {};

// app.listen(3000, function () {
// 	console.log('Listening to the port 3000');
// });
http.createServer(app).listen(EXPRESS_HTTPS_PORT, function () {
    console.log('App started on https port ' + EXPRESS_HTTPS_PORT);
});
