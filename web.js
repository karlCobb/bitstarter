var fs = require('fs');
var buffer = new Buffer(Buffer.byteLength('Hello World from index.html'));
fs.readFileSync('/bitstarter/index.html');
buffer.toString();
                                           
