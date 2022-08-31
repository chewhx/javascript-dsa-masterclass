const { sumZeroNaive, sumZero } = require("./30-MultiplePointers");

const testConditions = [
  [[-3, -2, -1, 0, 5, 5, 4], undefined],
  [
    [-3, -1, -2, 3, 4, 5],
    [-3, 3],
  ],
];

describe("30-MultiplePointers", () => {
  it("sumZeroNaive is defined", () => {
    expect(sumZeroNaive).toBeDefined();
  });

  it(`${testConditions[0][0]} to be undefined`, () => {
    const res = sumZeroNaive(testConditions[0][0]);
    expect(res).toBeUndefined();
  });

  it(`${testConditions[1][0]} to be undefined`, () => {
    const res = sumZeroNaive(testConditions[1][0]);
    const expected = testConditions[1][1];
    expect(res).toMatchObject(expected);
  });
});
