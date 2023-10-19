[app.js]
-> Serving
1. 8080 포트번호
2. createServer()
3. readFile로 sign up.html & sub.html 파일 불러오기 (sub.html은 sub.js로 대체)
4. 데이터는 POST 방식 : 개인정보가 담긴 것, 새로운 정보를 생성하는 것, 길이의 제한X
    -> index.html에 입력하는 데이터를 sub.html(sub.js)에 불러와야 한다 
    -> body에 담긴 데이터(파라미터)를 불러오는 방법, signup-asset이라는 객체 모듈에 대입하는 방법

[app.js] [signup-asset]
-> form 입력하는 파라미터 처리 
=> 최초페이지 받은 데이터를 asset.js 의 객체 모듈에 값을 대입해주고 두번째 페이지로 받아오기
1. POST 방식일 때 작동
2. input에 입력된 정보를 signup-asset 객체에 대입
3. signup-asset.id 값을 띄우기
4. submit 조건 만족을 위해 signup-asset의 id, password, email을 활용

[index.html]
-> Sign Up 페이지

1. submit 조건
(1) 아이디 영문 대소문자
(2) 비밀번호 동일 조건
(3) 이메일 @, . 포함

=> FORM 태그로 함수를 통해 유효성 검사 실행 X 
=> 정규식 사용하지 않고, 파라미터와 모듈을 활용하기 위해 자바스크립트의 모듈로 다시 작성 
=> 3가지 조건이 모두 확인되면 sub.html 로 이동하는 submit 활성화

<!-- [sub.html]
-> 이메일 페이지
1. 이번 index.html의 form에 입력한 ID 값 불러오기
2. title, text input에 빈칸X 조건
=> FORM 태그로 함수를 통해 유효성 검사 실행
=> <scipt>로 빈칸이 아닐 경우 send 버튼 활성화, 빈칸이면 버튼 비활성화 함수 실행 -->

[sub.js]
1. form의 id input 데이터를 가져오는 과정에서 모듈화
2. js로 HTML 문서를 문자열로 작성
3. id.value가 들어갈 부분에 더해줌
=> index.html에서 입력하는 id input 데이터를 띄워줌 

URL -> index.html -> POST -> sub.html

