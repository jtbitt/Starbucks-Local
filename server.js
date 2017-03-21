// get packages
var express = require('express');
var app     = express();
var path    = require('path');
var port    = process.env.PORT || 8080;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// set up front end
app.use(express.static(__dirname + '/src'));

// route to send index.html
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
    console.log('sup');
});

// start server
app.listen(port);
console.log('Express server listening on ' + port);
