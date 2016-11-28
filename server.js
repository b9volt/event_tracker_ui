// MODULES
// ==================================
var express = require('express');
var app     = express();
var path    = require('path');
var logger = require('morgan');
var port    = process.env.PORT || 4000

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.render('index');
})

app.listen(port, function(){
    console.log('app listening on ==>', port);
})
