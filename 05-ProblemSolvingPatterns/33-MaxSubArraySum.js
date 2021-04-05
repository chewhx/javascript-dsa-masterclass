/* Write a function which accepts an array of integers and a number called 'n'. The function should calculate the maximum sum of 'n' consecutive elements in the array. */

function maxSubarraySum_naive(array, n) {
  if (array.length < n) return null;
  var max = -Infinity;
  for (let i = 0; i < array.length - n + 1; i++) {
    temp = 0;
    for (let j = 0; j < n; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// sliding window solution - my take
// [1, 2, 3, 4, 5, 6]
//  _        _
// instead of starting the loop again, just minus the previous number and add the next number
//     -         -
// slide the box/window over to the right

function maxSubarraySum(array, n) {
  // if array has no values, return null
  if (array.length < n) return null;
  // create two variables to hold indexes, where the no. of elements in the window" [a, _, _, b] is n
  // if n=4, a=0, b=3, iterating through elements at index '0' and '3'
  // "the window":
  let a = 0;
  let b = n - 1;
  // create two variables which will hold the sum of numbers and compare
  let max = 0;
  let temp = 0;
  // while 'b' the upper index figure does not exceed array.length
  while (b < array.length) {
    // we reset temp to '0' each time
    temp = 0;
    // iterate through the window of indexes and sum up the elements at each index
    // if a = 0, b = 3
    // we sum up the elements at index 0,1,2,3, and assing to temp
    for (i = a; i <= b; i++) {
      temp += array[i];
    }
    // we check if temp is larger than max, if so we update max to the value at temp
    // this ensures that we always have the max value possible when adding up all the elements in the "window"
    if (temp > max) {
      max = temp;
    }
    // we repeat the process by increasing the index of 'a' and 'b' by 1, thereby shifting the window to the right, until 'b' reaches the array.length
    a++;
    b++;
  }
  // return the max number
  return { max };
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null
