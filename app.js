const http = require("http"); // http 불러오기
const fs = require("fs"); // fs 불러오기

const qs = require("querystring"); // queryString 불러오기
const signUpAsset = require("./signup-asset/signup-asset.js"); // signUp 데이터 객체 모듈 불러오기

const checkId = require("./module/checkId.js"); // id 영문 대소문자 검사 함수 모듈 가져오기
const checkPw = require("./module/checkPw.js"); // pw 검사 함수 모듈 가져오기
const checkEmail = require("./module/checkEmail.js"); // email 검사 함수 모듈 가져오기

const subPage = require("./module/subPage.js"); // subPage 모듈 가져오기

const sendAsset = require("./signup-asset/send-asset.js"); // send 데이터 객체 모듈 불러오기
const { send } = require("process");

  // 서버 생성
  http.createServer(function (req, res) {
    
    if (req.url === "/") {
      fs.readFile("./static/index.html", function (err, data) {
        if (err) {
          console.error("파일을 읽지 못했습니다.");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
    }
    
    // POST 방식으로 요청 (sign up에서 submit)할 때 실행
    if (req.method === "POST" && req.url === '/') {
      let body = "";
      
      // data 이벤트가 발생하면 함수 실행
      req.on("data", (chunk) => {
        body += chunk.toString(); // body = body + chunk.toString -> input에 입력된 데이터를 문자열로 body에 반환
      });
      
      // end 이벤트가 발생하면 실행되는 함수 -> body에 저장한 chunk 데이터를 파싱
      req.on("end", () => {
        let parseBody = qs.parse(body); // body 값을 parseBody라는 객체에 문자열로 대입
        
        Object.assign(signUpAsset, parseBody); // parseBody의 프로퍼티 키와 동일한 signUpAsset의 프로퍼티 키에 값을 대입

        // id, password, email 조건식
        if (
          checkId(signUpAsset.id) &&
          checkPw(signUpAsset.password, signUpAsset.password2) &&
          checkEmail(signUpAsset.email)
          ){
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(subPage.one + `${signUpAsset.id}` + subPage.two);
          }
      });
    }

    // POST 방식으로 요청 (subPage에서 send)할 때 실행
    if (req.method === "POST" && req.url === '/send') {

      let body = "";
      // data 이벤트가 발생하면 함수 실행
      req.on("data", (chunk) => {
        body += chunk.toString(); // body = body + chunk.toString -> input에 입력된 데이터를 문자열로 body에 반환
      });

      // end 이벤트가 발생하면 실행되는 함수 -> body에 저장한 chunk 데이터를 파싱
      req.on("end", () => {
        let parseBody = qs.parse(body); // body 값을 parseBody라는 객체에 문자열로 대입

        Object.assign(sendAsset, parseBody); // parseBody의 프로퍼티 키와 동일한 sendAsset의 프로퍼티 키에 값을 대입
        console.log(sendAsset); // 터미널에 title, text 입력한 값 출력
      });
    }
  })
  .listen(8080, (err) => {
    console.log(`서버 가동중 -> http://localhost:${8080}/`);
  }) //포트 번호 8080
