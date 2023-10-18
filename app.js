const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.end("test")
}).listen(8019)