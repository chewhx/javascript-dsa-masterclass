function insertionSort(array) {
  // pick the second element in the array
  for (let i = 1; i < array.length; i++) {
    // compare second element with one before it and swap if necessary
    let currentVal = array[i];
    for (var j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }
  return array;
}

console.log(insertionSort([12, 5, 5434, 36, 4, 2, 34]));
