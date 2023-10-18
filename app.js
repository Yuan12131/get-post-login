const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){

  if(req.url === '/'){
    fs.readFile("./static/index.html", function(err, data){
      if (err){
        console.error("파일을 읽지 못했습니다.");
      } else {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);
      } 
    })
  }

  if(req.url === '/sub.html'){
    fs.readFile("./static/sub.html", function(err, data){
      if (err){
        console.error("파일을 읽지 못했습니다.");
      } else {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data);
      } 
    })
  }

  }).listen(8080)