// Swap Helper

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Pivot Helper
// takes three arguments: array, start index, end index
function pivot(arr, start = 0, end = arr.length + 1) {
  let currentPivot = arr[start];
  let swapIndex = start;
  for (i = start + 1; i < arr.length; i++) {
    // compare pivot to arr[i]
    if (currentPivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
      // console.log({ currentPivot, swapIndex, i, arr });
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

// ===== QUICK SORT =====

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 10, 56, 23, 77, 38, 12, 5]));
