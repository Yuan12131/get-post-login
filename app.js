const http = require('http'); // http 불러오기
const fs = require('fs'); // fs 불러오기

// 서버 생성
http.createServer(function(req, res){

  // index.html 불러오기
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

   // if(req.method === "POST"){
  //   if (password === passwordTwo){
  //     user = User.objects.create
  //   }
  // }

  // if request.method == 'POST':
  //       # password와 confirm에 입력된 값이 같다면
  //       if request.POST['password'] == request.POST['confirm']:
  //           # user 객체를 새로 생성
  //           user = User.objects.create_user(username=request.POST['username'], password=request.POST['password'])
  //           # 로그인 한다
  //           auth.login(request, user)
            // return redirect('/')

  // sub.html 불러오기
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

  }).listen(8080) //포트 번호 8080