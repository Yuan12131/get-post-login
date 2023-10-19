function checkId(id) {
  let upper = false; // 대문자
  let lower = false; // 소문자

  for (let i = 0; i < id.length; i++) {
    if (id.charCodeAt(i) >= 65 && id.charCodeAt(i) <= 90) {
      upper = true; // 대문자가 포함되면 true
    } else if (id.charCodeAt(i) >= 97 && id.charCodeAt(i) <= 122) {
      lower = true; // 소문자가 포함되면 true
    }
  }
  return upper && lower; // 대소문자가 모두 포함되면 true, 아니면 false
}

module.exports = checkId;