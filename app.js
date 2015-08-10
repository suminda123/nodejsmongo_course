/* global path */
/// <reference path="typings/node/node.d.ts"/>
var express = require('express');
var path = require('path');
var routes = require('./routes')
var mongoClient = require('mongodb').MongoClient;
var server = require('mongodb').Server;

var app = express();
app.set('port', process.env.PORT || 8000);
app.set('views', path.join( __dirname, '/views') ); // critical to use path.join on windows
app.set('view engine', 'vash');

app.get('/', routes.index);

app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});