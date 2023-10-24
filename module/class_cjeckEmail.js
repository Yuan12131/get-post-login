function checkEmail(email){
if (typeof(email) === "string"){
  const emailArray = Array.from(email);
  const filteredArray = emailArray.filter(char => {
    if(char === "@"){
      return true;
    } else if (char === "."){
      return true;
    } else {
      return false;
    }
  });
  const hasAtSign = filteredArray.includes("@");
  const hasDot = filteredArray.includes(".")
  return hasAtSign && hasDot;
} else {
  console.log(email + "<- 이 매개변수는 올바른 데이터타입이 아닙니다.")
}
}

module.exports = validateEmail;