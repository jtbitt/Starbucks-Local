// get packages
var express = require('express');
var app     = express();
var path    = require('path');
var port    = process.env.PORT || 8080;

// set up front end
app.use(express.static(__dirname + '/src'));

// route to send index.html
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/src/index.html'));
});

// start server
app.listen(port);
console.log('Express server listening on ' + port);
