/* global path */
/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var bodyParser = require('body-parser')
var path = require('path');
var routes = require('./routes')
//var mongoClient = require('mongodb').MongoClient;
//var server = require('mongodb').Server;

var app = express();
app.set('port', process.env.PORT || 8000);
app.set('views', path.join( __dirname, '/views') ); // critical to use path.join on windows
app.set('view engine', 'vash');

app.use(bodyParser());
//app.use(app.router);

//error handler internal server errror
function errorHandler(err, req, res, next){
  console.log(err.message);
  console.log(err.stack);
  res.status(500);
  res.render('error_template', {errror: err});
}

app.use(errorHandler);

app.get('/', routes.index);

app.post('/fruitpicker', function(req, res, next){
  var favorite = req.body.fruit;
  if (!favorite)
  	next(Error('Please chooser fruit'));
  	
  	res.render('fruitpicker', {fruitselected: favorite});
});


app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});