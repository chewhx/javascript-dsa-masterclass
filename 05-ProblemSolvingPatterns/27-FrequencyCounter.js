/* Write a function which takes two array, and check if the second array contains the square of every values in first array.
They should have the same number of elements. And the square number cannot used for the same value in first array
*/

// ===== Naive solution ===========

/* As nested loops, this has quadratic notation*/

function same_naive(arr1, arr2) {
  // if both arrays lengths do not match, return false
  if (arr1.length !== arr2.length) return false;

  // loop through each number in array 1
  for (let el1 of arr1) {
    // square each number and put into a variable
    const squared = Math.pow(el1, 2);
    // loop through array 2
    // check if the new squared number exist in array 2
    const indexOf = arr2.indexOf(squared);
    if (indexOf === -1) return false;
    // if exist, splice the number from array 2
    arr2.splice(indexOf, 1);
  }
  // and repeat until no numbers left in array 2
  return true;
}

// ============ Frequency counter -  O(n) notation =========

/* Use object to breakdown the contents to compare */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  // set up two counter objects
  const counter1 = {};
  const counter2 = {};
  // loop through each arr and create key:count for each item in array
  for (let el of arr1) {
    counter1[el] = (counter1[el] || 0) + 1;
  }
  for (let el of arr2) {
    counter2[el] = (counter2[el] || 0) + 1;
  }
  console.log(counter1);
  console.log(counter2);
  // loop through keys in counter 1
  for (let key in counter1) {
    const squared = key ** 2;
    // check if the square of key in counter 1 exists in keys of counter 2
    if (!counter2[squared]) return false;
    // check if the value of the squared key in counter2 === the value of the key in counter1
    if (counter1[key] !== counter2[squared]) return false;
  }
  return true;
}

console.log(same([1, 1, 2, 3, 9, 9, 0], [4, 9, 1, 81, 1, 81, 0]));
