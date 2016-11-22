// MODULES
// ==================================
var express = require('express');
var path    = require('path');
var logger  = require('morgan');
var app     = express();

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
