import { same, sameNaive } from "./27-FrequencyCounter";

describe("27 - FrequencyCounter", () => {
  it("same is defined", () => {
    expect(same).toBeDefined();
  });

  it("[1,2,3] [4,1,9] to be true", () => {
    const res = same([1, 2, 3], [4, 1, 9]);
    const expected = true;
    expect(res).toBe(expected);
  });

  it("[1,2,3] [1,9] to be false", () => {
    const res = same([1, 2, 3], [1, 9]);
    const expected = false;
    expect(res).toBe(expected);
  });

  it("[1,2,3] [4,4,1] to be false", () => {
    const res = same([1, 2, 3], [4, 4, 1]);
    const expected = false;
    expect(res).toBe(expected);
  });

  it("[1, 1, 2, 3, 9, 9, 0], [4, 9, 1, 81, 1, 81, 0] to be true", () => {
    const res = same([1, 1, 2, 3, 9, 9, 0], [4, 9, 1, 81, 1, 81, 0]);
    const expected = true;
    expect(res).toBe(expected);
  });

  it("sameNaive is defined", () => {
    expect(sameNaive).toBeDefined();
  });

  it("[1,2,3] [4,1,9] to be true", () => {
    const res = sameNaive([1, 2, 3], [4, 1, 9]);
    const expected = true;
    expect(res).toBe(expected);
  });

  it("[1,2,3] [1,9] to be false", () => {
    const res = sameNaive([1, 2, 3], [1, 9]);
    const expected = false;
    expect(res).toBe(expected);
  });

  it("[1,2,3] [4,4,1] to be false", () => {
    const res = sameNaive([1, 2, 3], [4, 4, 1]);
    const expected = false;
    expect(res).toBe(expected);
  });

  it("[1, 1, 2, 3, 9, 9, 0], [4, 9, 1, 81, 1, 81, 0] to be true", () => {
    const res = sameNaive([1, 1, 2, 3, 9, 9, 0], [4, 9, 1, 81, 1, 81, 0]);
    const expected = true;
    expect(res).toBe(expected);
  });
});
