function fib(n) {
  if (n <= 0) return;
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4)); //3
console.log(fib(10)); //55
console.log(fib(28)); //317811
console.log(fib(35)); //9227465

// 4-3
// 10-55
// 28 317811
// 35 9227465
