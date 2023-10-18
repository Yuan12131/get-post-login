const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){

  res.writeHead(200, {"Content-Type" : "text/html"});

  fs.readFile("./static/index.html", function(err, data){
    if (err){
      console.error("파일을 읽지 못했습니다.");
    } else {
      res.end(data);
    }
  })
}).listen(8019)