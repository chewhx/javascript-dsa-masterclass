var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

function nestedEvenSum(object) {
  let numbers = [];

  function helper(object) {
    for (let key in object) {
      if (typeof object[key] === "object") {
        helper(object[key]);
      }
      if (typeof object[key] === "number") {
        numbers.push(object[key]);
      }
    }
  }

  helper(object);

  function isEven(num) {
    return num % 2 === 0;
  }

  return numbers.reduce((acc, value) => {
    if (isEven(value)) {
      return acc + value;
    }
    return acc;
  }, 0);
}

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
