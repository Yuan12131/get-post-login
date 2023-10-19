function emailCheck(email){
  // indexOf 함수를 통해 해당 문자(@, .)을 찾기
  // @가 없을 시 유효성 검사에 어긋남
  if (email.indexOf('@') === -1){
    return false;
  }
  // '.'이 없을 시 유효성 검사에 어긋남
  if (email.indexOf('.') === -1){
    return false;
  }
  else {
    return true
  }
}

module.exports = emailCheck;