function flatten(arrayOfArrays) {
  let results = [];

  function helper(item) {
    if (typeof item !== "object") results.push(item);
    if (typeof item === "object") {
      for (let el of item) {
        helper(el);
      }
    }
  }

  helper(arrayOfArrays);
  return results;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
