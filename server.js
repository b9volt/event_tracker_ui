var express = require('express');
var app     = express();
var path    = require('path');
var logger = require('morgan');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
