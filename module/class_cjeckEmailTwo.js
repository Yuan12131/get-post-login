function checkEmail(email){
  let hasAtSign = false;
  let hasDot = flase;

if (typeof(email) === "string"){
  for (let i = 0; i < email.length; i++){
    let char = email[i];
    if (char === "@"){
      hasAtSign = true;
    }
    if(char === "."){
      hasDot = true;
    }
  }
  return hasAtSign && hasDot;
} else {
  console.log(email + "<- 이 매개변수는 올바른 데이터타입이 아닙니다.")
}
}

module.exports = validateEmail;