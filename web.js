var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
app.get('/', function(request, response) {
	fs.readFile('index.html', function (err, data) {
	  if (err) throw err;
	  console.log(data);
  	  response.send(data.toString());
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
