var fs = require('fs');
var buffer = new Buffer(Buffer.byteLength('Hello World from index.html'));
fs.readFileSync('index.html');
buffer.toString();
                                           
