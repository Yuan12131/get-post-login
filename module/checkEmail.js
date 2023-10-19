function emailCheck(email){
  let atSignIndex = email.indexOf("@");
// @가 없으면 -1이니 값이 -1이면 fasle
  if (email.indexOf('@') === -1){
    return false;
  }
// .이 @보다 뒤에 있지 않으면 false
  if (!email.includes('.', atSignIndex)){
    return false;
  }
  else {
    return true
  }
}

module.exports = emailCheck;