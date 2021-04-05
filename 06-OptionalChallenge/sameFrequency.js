/* Given two positive integers, find out if the two numbers have the same frequency of digits. 
Your solution MUST have the following complexities: 
O(n)
*/

function sameFrequency(num1, num2) {
  // if length of both numbers do not match, return
  if (num1.length !== num2.length) return `Numbers length do not match`;
  // if either number is null, return
  if (num1.length < 0 || num2.length < 0) return `Numbers are null`;
  // create two objects to hold count of each digit
  const object1 = {};
  const object2 = {};
  // create an array from num1 and num2, and loop through to populated the object1 with count of each value
  for (let el of num1.toString().split("")) {
    object1[el] = object1[el] + 1 || 1;
  }
  for (let el of num2.toString().split("")) {
    object2[el] = object2[el] + 1 || 1;
  }
  // create array from num1 and loop through to check if
  for (let key of num1.toString().split("")) {
    // corresponding key exists in object1
    if (!object2[key]) return false;
    // the value of the key matches the count
    if (object1[key] !== object2[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
console.log(sameFrequency(789633345312, 123456789333)); // false
