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

bookshelf.knex.schema.hasTable('fighters').then(function(exists,err){
	if(!exists){
		bookshelf.knex.schema.createTable('fighters', function(fighter){
			fighter.increments('id').primary();
			fighter.string('name', 100).unique();
		}).then(function(table){
			console.log('Created fighter table!');
		})
	}
});

app.listen(port,function(){
	console.log('listening on port:',port);
});