/* Function takes in two strings, and check whether characters in the first string form a subsequence of characters in second string. Meaning if chacters in first string, appears somewhere in second string, without order changing. */

function isSubsequence(string1, string2) {
  if (!string1.length || string2.length < 0) return false;
  // create two variables a=0, b=1
  let a = 0;
  let b = 0;
  while (b < string2.length) {
    if (string1[a] === string2[b]) a++;
    if (a === string1.length) return true;
    b++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
