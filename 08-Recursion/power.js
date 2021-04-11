// accepts a base and exponent
// return power tof the base to exponent
// mimic Math.pow()

function power(base, ex) {
  if (ex < 0) return;
  if (ex === 0) return 1;
  if (ex === 1) return base;
  return base * power(base, ex - 1);
}

console.log(power(2, 1)); // 2
console.log(power(2, 2)); // 4
console.log(power(2, 3)); // 8
console.log(power(2, 4)); // 16
console.log(power(3, 0)); // 1
console.log(power(3, 1)); // 3
console.log(power(3, 2)); // 9
console.log(power(3, 3)); // 27
console.log(power(3, 4)); // 81
