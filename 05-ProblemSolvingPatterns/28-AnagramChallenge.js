/*Given two strings, write a function to determine if the second string is an anagram of the first 
Use frequencey counters
*/

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  // create two counters objects
  const counter1 = {};
  const counter2 = {};
  // loop through first string and log number of each letter counter object
  const arr1 = [...str1];
  for (let el of arr1) {
    counter1[el] = (counter1[el] || 0) + 1;
  }
  // loop through second string and log number of each letter in counter object
  const arr2 = [...str2];
  for (let el of arr2) {
    counter2[el] = (counter2[el] || 0) + 1;
  }
  // loop through counter object check that both objects match in terms of key and value
  for (let key in counter1) {
    if (!counter2[key]) return false;
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
}

console.log(
  validAnagram("", "") // true
);
console.log(
  validAnagram("azz", "zaa") // false
);
console.log(
  validAnagram("anagram", "nagaram") // true
);
console.log(
  validAnagram("rat", "car") // false
);
console.log(
  validAnagram("awesome", "awesom") // false
);
console.log(
  validAnagram("qwerty", "qeywrt") // true
);
console.log(
  validAnagram("texttwisttime", "timetwisttext") // true
);
