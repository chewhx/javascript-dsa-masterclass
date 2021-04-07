// Helper function which merges two array and into one sorted array
function mergeArray(arr1, arr2) {
  let a = 0;
  let b = 0;
  let newArr = [];
  while (a < arr1.length && b < arr2.length) {
    if (arr1[a] < arr2[b]) {
      newArr.push(arr1[a]);
      a++;
    } else {
      newArr.push(arr2[b]);
      b++;
    }
  }
  while (a < arr1.length) {
    newArr.push(arr1[a]);
    a++;
  }
  while (b < arr2.length) {
    newArr.push(arr2[b]);
    b++;
  }
  return newArr;
}

// ========== MERGE SORT ===============

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  console.log({ left, right });
  return mergeArray(left, right);
}

console.log(mergeSort([3, 2, 5, 4, 6, 1, 8, 7, 9, 5, 23]));
