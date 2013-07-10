var fs = require('fs');
var buffer = new Buffer(Buffer.byteLength('Hello world from index.html'));
buffer = fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf-8');
buffer.toString();
