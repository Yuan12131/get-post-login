const http = require('http');
const querytring = require('querystring');

http.createServer((req, res) => {
  if (req.method === 'POST'&& req.url === '/login'){
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
      // body = body + chunk.toString -> 데이터를 문자열로 반환
    });

    req.on('end', () => {
      const parsedBody = querytring.parse(body); // 요청본문을 파싱
      const { username, password } = parsedBody;

      console.log(`form 입력으로부터 받은 데이터 확인 -> `, parsedBody)
      console.log(`form 입력으로부터 받은 데이터 확인 -> `, username)
      console.log(`form 입력으로부터 받은 데이터 확인 -> `, password)

      res.writeHead(200, {'Content-Type' : 'text/plain'});
      res.end("login sucess!")
    });
  }

})