// MODULES
// ==================================
var express = require('express');
var app     = express();
var path    = require('path');
var logger = require('morgan');

// MIDDLEWARE / CONFIGURATION
// ==================================
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public')));

// app.get('/', function(req, res){
//     res.render('index');
// });

app.post('events/add', function(req,res){
  console.log(req.body);
  // create a new event, and save to db
})

app.put('events/edit/:id', function(req,res){
  console.log(req.body);
  // create a new event, and save to db
})

app.delete('events/delete/:id', function(req,res){
  console.log(req.body);
  // create a new event, and save to db
})

app.listen(4000, function(){
    console.log("app listening on port 4000");
});
