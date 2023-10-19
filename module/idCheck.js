function idCheck(id){
    // isAlphaNumeric(str) 사용자 정의 함수는 유니코드로 해당값을 검사해줌. 
    if(!checkEnglish(id)){
      return false;
    } else if(id == null){
      return false;
    }
    // 조건 만족 후 true 반환
    return true;
}

function checkEnglish(id){
  let count = 0;
  for(let i = 0; i < id.length; i++){
      if((id.charCodeAt(i)>=65 && id.charCodeAt(i)<=90) && (id.charCodeAt(i)>=97 && id.charCodeAt(i)<=122)){
          count += 1;
      }
  }

  //카운트 수와 문자의 길이가 같다면 true
  if(count === (id.length)){
    return true;
  } else{
    return false;
  }
}

module.exports = idCheck;