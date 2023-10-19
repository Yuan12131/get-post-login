const subPage = {
one : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>`,
  two : `님, 안녕하세요
  </h1>
  <form method="POST" id="form">
    <p>Title</p>
    <input type="text" id="title" name="title">
    <br>

    <p>Text</p>
    <input type="text" id="text" name="text">
    <br>

    <input type="button" id="btn" name="send" value="send" disabled='disabled'>
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
