const {
  countUniqueValues,
  countUniqueValuesNaive,
} = require("./31-CountUnqiueValues");

const testConditions = [
  [[1, 1, 1, 1, 1, 2], 2],
  [[1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13], 7],
  [[], 0],
  [[2, 3], 2],
  [[-2, -1, -1, 0, 1], 4],
];

describe("31-CountUnqiueValues", () => {
  it("countUniqueValues to be defined", () => {
    expect(countUniqueValues).toBeDefined();
  });

  testConditions.forEach(([a, expected]) => {
    it(`${a} to be ${expected}`, () => {
      const res = countUniqueValues(a);
      expect(res).toBe(expected);
    });
  });

  it("countUniqueValuesNaive to be defined", () => {
    expect(countUniqueValuesNaive).toBeDefined();
  });

  testConditions.forEach(([a, expected]) => {
    it(`${a} to be ${expected}`, () => {
      const res = countUniqueValuesNaive(a);
      expect(res).toBe(expected);
    });
  });
});
