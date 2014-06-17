var express = require('express');
var http = require('http');
var utils = require('./lib/utils.js');
var fs = require('fs');

var app = express();
var server = http.createServer(app); 

var logger = function (req, res, next) {
    console.log(req.connection.remoteAddress + " tried to access : " + req.url);

    next(); // Passing the request to the next handler in the stack.
}

// Configuration
app.configure(function () {
    app.use("/js", express.static(__dirname + '/public/js')); // javascript folder
    app.use("/css", express.static(__dirname + '/public/css')); // javascript folder

    app.set('views', __dirname + '/views'); // views folder
    app.set('view engine', 'ejs'); // view engine for this projet : ejs 

    app.use(express.bodyParser()); // for POST Requests
    app.use(logger); // Here you add your logger to the stack.
    app.use(app.router); // The Express routes handler.
});

// homepage
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// About page
app.get('/about', function (req, res) {
    res.render('about.ejs');
});

app.get('/API/hash/:hashstr', function(req, res) {
    console.log('Hash ' + req.params.hashstr);
    res.setHeader('Content-Type', 'application/json');
    utils.getAllModules(function (modules) {
        //console.log(modules);
        functs = [];
        for (i = 0; i < modules.length; i++) {
            module = require('./' + modules[i]);
            functs = module.check(req.params.hashstr, functs);
        }
        res.end(JSON.stringify(functs));
    });
});

server.listen(80);
