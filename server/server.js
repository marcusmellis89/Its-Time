var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Promise = require('bluebird');

var port = process.env.port || 8000;

var dbConfig = {
	client: 'mysql',
	connection: {
		host: 'localhost',
		user: 'root',
		port: port,
		database: 'fight_historian',
		charset: 'utf8'
	}
}

var knex = require('knex')(dbConfig);
var bookshelf = require('bookshelf')(knex);

var allowCrossDomain = function(req, res, next){
	res.header('Access-Control-Allow-Origin','*');
	next();
}

app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());



app.use('/',function(req,res){
	res.send('hello world')
});

app.listen(port,function(){
	console.log('listening on port:',port);
});