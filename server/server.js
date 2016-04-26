var express = require('express');

var app = express();

var port = process.env.port || 8000;


app.use('/',function(req,res){
	res.send('hello world')
});

app.listen(port);
console.log('listening on port:',port);