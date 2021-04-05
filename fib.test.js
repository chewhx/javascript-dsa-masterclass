const fib = require("./fib");

test("Fibonacci test", () => {
  expect(fib(9)).toBe(34);
  expect(fib(8)).toBe(21);
  expect(fib(1)).toBe(1);
  expect(fib(2)).toBe(1);
  expect(fib()).toBe(false);
  expect(fib(0)).toBe(false);
  expect(fib(13)).toBe(233);
  expect(fib(11)).toBe(89);
});
