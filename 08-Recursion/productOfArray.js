// takes in an array of numbers and returns the product of them all
// must use recursion
function productOfArray([num, ...rest]) {
  if (!rest.length) return num;
  return num * productOfArray(rest);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
