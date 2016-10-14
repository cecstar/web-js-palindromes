function isPalindrome(s) {
  var stringConcat = s.replace(/\s/g, "");
  var stringReverse = stringConcat.split("").reverse().join("");
  return stringConcat === stringReverse;
}
module.exports = isPalindrome;