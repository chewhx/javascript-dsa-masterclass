const reverse = require("./reverse");

function isPalindrome(string) {
  const revString = reverse(string);
  if (string === revString) return true;
  return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
