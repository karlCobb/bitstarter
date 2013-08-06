var express = require('express');

var app = express.createServer(express.logger());

var htmlfile = "index.html";
var fs = require('fs');

var buffer = new Buffer(Buffer.byteLength('Hello world from index.html'));
buffer = fs.readFileSync('index.html', 'utf-8');

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
