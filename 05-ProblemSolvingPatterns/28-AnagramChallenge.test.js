const { validAnagram } = require("./28-AnagramChallenge");

const testConditions = [
  ["abc", "bac", true],
  ["foobar", "foobar", true],
  ["", "", true],
  ["aaz", "azz", false],
  ["rat", "atr", true],
  ["texttwisttime", "timetwisttext", true],
  ["apsdpafsf", "aosdpjfsd", false],
  ["rat", "car", false],
  ["awesome", "awesom", false],
];

describe("28-AnagramChallenge", () => {
  it("Should be defined", () => {
    expect(validAnagram).toBeDefined();
  });

  testConditions.forEach(([a, b, expected]) => {
    it(`${a}, ${b} should be ${expected}`, () => {
      const res = validAnagram(a, b);
      expect(res).toBe(expected);
    });
  });
});
