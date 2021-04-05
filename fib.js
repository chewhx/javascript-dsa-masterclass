function fib(n) {
  if (n < 1 || !n) return false;
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;

console.log(typeof fib(9));
