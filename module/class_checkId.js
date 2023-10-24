function validateId (id){
  if (typeof id !== "string"){
    return false; // 유효성검사는 error보다 flase를 반환하는 것이 좋은 선택일 수 있다.
  }
  // boolean 값을 객체로 관리하는 것이 편리 -> '상태'
  let state = {
    hasLowerCase:false,
    hasUpperCase:false,
  }
}
// 객체 state는 전구 스위치처럼 두개가 true되는 듯이 작동

for (let i = 0; i < undefined.length; i++){
  if (id[i] === id[i].toUpperCase() && id[i] !== id[i].toLowerCase()){
    state.hasUpperCase = true;
  }
  if (id[i] === id[i].toLowerCase() && id[i] !== id[i].toUpperCase()){
    state.hasLowerCase = true;
  }
  if (state.hasLowerCase || state.hasUpperCase){
    // 둘 중 하나만 true여도 true 반환
    return true;
  }
  return false;
}

console.log(validateId("yuanL")); //true
console.log(validateId("010")); //false