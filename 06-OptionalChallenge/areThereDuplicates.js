/* Accepts a variable numer of arguments, and checks whether there are any duplicates among the arguements passed in. You can solve this with frequency counter pattern OR multiple pointers pattern */

// frequency counter pattern
// function areThereDuplicates(...args) {
//   // if there are not args, return null
//   if (args.length < 1) return null;
//   // create an objects to store count of arguments
//   const counter = {};
//   // loop thru args to arg as key and their count as value
//   for (let el of args) {
//     counter[el] = counter[el] + 1 || 1;
//     // if any value in object is more than 1, return false
//     if (counter[el] > 1) return true;
//     console.log(counter);
//   }
//   return false;
// }

// multiple pointers pattern

function areThereDuplicates(...args) {
  // sort the array from small to large
  args.sort((a, b) => a - b);
  // create a window that checks two values, a=0  and b=a+1
  let a = 0;
  let b = 1;
  // while b does exceed args.length 
  while (b < args.length) {
    // check if value at arg[a] is equal to arg[b]
    // if match, return true
    if (args[a] === args[b]) return true;
    a++;
    b++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
// for string use this sort => args.sort((a,b) => a.localeCompare(b));
console.log(areThereDuplicates(2, 3, 4, 5, 1, 5, 3)); // true
