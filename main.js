var http = require("http");

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'})        
   response.end('This page is a big work in progress. Check back later!\n');
}).listen(80);
