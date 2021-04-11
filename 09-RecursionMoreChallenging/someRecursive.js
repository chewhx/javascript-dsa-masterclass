const isOdd = val => val % 2 !== 0;

function someRecursive([num, ...rest], isOdd) {
  if (!num) return
  return isOdd(num) || someRecursive(rest)
}

someRecursive([1,2,3,4], isOdd) // true
someRecursive([4,6,8,9], isOdd) // true
someRecursive([4,6,8], val => val > 10); // false
someRecursive([4,6,8], isOdd) // false

