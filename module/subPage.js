const subPage = {
one : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding:100px;
    }
    div{
      display: flex;
      margin: 5px;
      align-items: center;
      justify-content: flex-end;
      width: 300px;
      color: #b6b6b6;
    }
    #title {
      width: 300px;
      height: 25px;
      margin: 5px;
      background-color: #cfcece;
      border: 0;
      border-radius: 5px;
    }

    #text {
      width: 300px;
      height: 300px;
      margin: 5px;
      background-color: #cfcece;
      border: 0;
      border-radius: 5px;
    }

    #btn{
      width: 70px;
      height: 25px;
      background-color: #FF6666;
      color: white;
      border: 0;
      border-radius: 5px;
      margin-left : 50px;
    }
  </style>
</head>
<body>
  <h3>`,
  two : `님! 반갑습니다. <br> 저에게 편지를 보내주세요!
  </h3>
  <form action="/send" method="post">
    <div>
      <p>Title</p>
      <input type="text" id="title" name="title">
      <br>
    </div>

    <div>
      <p>Text</p>
      <input type="text" id="text" name="text">
      <br>
    </div>
    
    <input type="submit" id="btn" value="send" disabled='disabled'>
    <br>
  </form>
  <script>
    const title = document.getElementById("title"); // title input
    const text = document.getElementById("text") // text input
    const btn = document.getElementById('btn') // send button

    // input을 빈칸으로 버튼을 누르면 팝업창 뜨는 함수
    btn.addEventListener('mouseover', caution => {
        if(title.value === ""){
          alert("제목을 입력해주세요")
          title.focus();
        }
        
        if(text.value === ""){
        alert("내용을 입력해주세요")
        text.focus();
        }
    })

    // input이 빈칸 여부에 따른 버튼 활성화 함수
    function active() {
      if (!(title.value && text.value)) {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    }

    // 키보드 입력할 때 버튼 활성화 함수 실행
    title.addEventListener("keyup", active);
    text.addEventListener("keyup", active);

  </script>
</body>
</html>`
}

module.exports = subPage;
