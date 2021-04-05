/* Given a sorted array of integer and a target number. Find out if there is a pair of values which average is the target number. There may be more than a pair of values which gives the target average.*/

function averagePair(array, target) {
  // if array length is less than 2, return false - not possible for find average
  if (array.length < 2) return false;
  // set two pointers, a = 0, b = 1
  let a = 0;
  let b = array.length - 1;
  // while a does not exceed array.length, and b is not less than 0
  while (a < array.length && b !== 0) {
    // check if average for number at a and b equals to the target number
    let average = (array[a] + array[b]) / 2;
    // if so return true
    if (average === target) return true;
    // if average of number at a and b is more than target, b--
    if (average > target) b--;
    // if average of number at a and b is less than target, a++
    if (average < target) a++;
  }
  // otherwise, return false
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
