const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

const qs = require("querystring"); // queryString 불러오기
const signUpAsset = require("./signup-asset/signup-asset.js"); // signUp 데이터 객체 모듈 불러오기
const checkId = require('./module/checkId.js'); // id 영문 대소문자 검사 함수 모듈 가져오기
const checkPw = require('./module/checkPw.js'); // pw 검사 함수 모듈 가져오기
const checkEmail = require('./module/checkEmail.js') // email 검사 함수 모듈 가져오기


// 서버 생성
http.createServer(function(req, res){
  
  if (req.url === '/'){

    fs.readFile("./static/index.html", function(err, data){
      if (err){
        console.error("파일을 읽지 못했습니다.");
      } else {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(data); 
    }
  })
}

// POST 방식으로 요청 (sign up에서 submit)할 때 실행
  if(req.method = "POST"){

      let body = '';
  
      // data 이벤트가 발생하면 chunk 함수 실행
      req.on("data", (chunk) => {
        body += chunk.toString(); // body = body + chunk.toString -> input에 입력된 데이터를 문자열로 body에 반환
      });
  
      // end 이벤트가 발생하면 실행되는 함수
      // on에서 읽어와서 body에 저장한 chunk 데이터를 파싱
      req.on("end", () => {

        const parseBody = qs.parse(body); // body 값을 parseBody라는 객체에 문자열로 대입

        Object.assign(signUpAsset, parseBody); // parseBody의 프로퍼티 키와 동일한 signUpAsset의 프로퍼티 키에 값을 대입
        console.log(signUpAsset);
        // id, password, email 조건식
        if (
          checkId(signUpAsset.id) && 
          checkPw(signUpAsset.password, signUpAsset.password2) &&
          checkEmail(signUpAsset.email)
        ) {}

      })
  }  

  }).listen(8080) //포트 번호 8080