function bubbleSort(arr) {
  let noSwaps;
  // start looping from a variable called i the end of the array towards the beginning
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    // start an inner loop with variable called j from the beginning until i-1
    for (let j = 0; j < i - 1; j++) {
      // if arr[j] is greater than arr[j-1], swap those two values
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  // return sorted array
  return arr;
}

console.log(bubbleSort([1, 12, 9, 35, 341]));
