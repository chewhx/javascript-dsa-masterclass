/* Accepts two parameters - an array of positive integers and a positive integer. Return the minimal length of a contiguous subarray of which the sum if greater than or equal to the interger passed to the function. If there isn't one, return 0 instead. */


// ==== NOT COMPLETED ====
function minSubArrayLen(array, number) {
  // set a sum variable
  let sumOf = 0;
  // set a slider at a = 0 and b = 0
  let a = 0;
  let b = 1;
  // while b < array length
  while (b < array.length) {
    // increase b to the right, and find sum of numbers between the index range
    for (let i = a; i <= b; i++) {
      sumOf += array[i];
      // if lesser than target number, b++
      if (sumOf < number) b++;
      // if more than target number, a++
      if (sumOf > number) a++;
    }
  }
  return [array[a], array[b]];
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3]  is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 22, 19], 52)); // 1 -> because [62] is greater than 52
