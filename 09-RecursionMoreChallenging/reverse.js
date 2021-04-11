// return the string in reverse, using recursion

function reverse([...string]) {
  if (!string.length) return "";
  const char = string.pop();
  return char + reverse(string);
}

console.log(reverse("awesome")); // emosewa
console.log(reverse("piglet")); // telgip

module.exports = reverse