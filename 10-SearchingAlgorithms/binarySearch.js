function binarySearch(array, value) {
  // left and right pointer to cover the array
  let left = 0;
  let right = array.length - 1;
  let middle;
  // while left < right
  while (array[middle] !== value) {
    // create a pointer in middle
    middle = Math.floor((right + left) / 2);
    // if value === middle element, return index
    if (array[middle] === value) return middle;
    // if value < middle element, move left pointer up
    if (array[middle] < value) left = middle + 1;
    // if value > middle element, move right pointer down
    if (array[middle] > value) right = middle - 1;
    // if middle === start or end, meaning the search has completed, and value is not found, return -1
    if (middle === left || middle === right) return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 12));
console.log(
  binarySearch(
    [
      5,
      6,
      10,
      13,
      14,
      18,
      30,
      34,
      35,
      37,
      40,
      44,
      64,
      79,
      84,
      86,
      95,
      96,
      98,
      99,
    ],
    950
  )
);
