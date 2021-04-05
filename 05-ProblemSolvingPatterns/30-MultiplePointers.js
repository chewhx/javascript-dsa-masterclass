/* Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or unfedined if a pair does not exist */

// O[n^2] - nested loop

function sumZero_naive(array) {
  for (let index in array) {
    const main = array[index];
    for (let i = index + 1; i < array.length; i++) {
      if (main + array[i] === 0) return [main, array[i]];
    }
  }
  return undefined;
}

// console.log(sumZero_naive([-3, -2, -1, 0, 5, 5, 4]));

// Using pointers

function sumZero(array) {
  if (array.length < 2) return false;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    }
    if (sum > 0) right--;
    else left++;
  }
}

console.log(sumZero([-3, -1, -2, 3, 4, 5]));
