var express = require('express');

var app = express();
var bodyParser = require('body-parser');


var port = process.env.port || 8000;

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());



app.use('/',function(req,res){
	res.send('hello world')
});

app.listen(port);
console.log('listening on port:',port);