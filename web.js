var fs = require('fs');
<<<<<<< HEAD
var buffer = new Buffer(Buffer.byteLength('Hello world from index.html'));
buffer = fs.readFileSync('/home/ubuntu/bitstarter/index.html', 'utf-8');
console.log(buffer);                                          
=======
var buffer = new Buffer(Buffer.byteLength('Hello World from index.html'));
fs.readFileSync('index.html');
buffer.toString();
                                           
>>>>>>> f5474349b5875bea3bfd3f96dddff5fc30068f56
