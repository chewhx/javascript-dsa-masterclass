const { maxSubarraySum, maxSubarraySumNaive } = require('./33-MaxSubArraySum');

const testConditions = [
	[[1, 2, 5, 2, 8, 1, 5], 2, 10],
	[[1, 2, 5, 2, 8, 1, 5], 4, 17],
	[[4, 2, 1, 6], 1, 6],
	[[4, 2, 1, 6, 2], 4, 13],
	[[], 4, null],
];

describe('33-MaxSubArraySum', () => {
	it('maxSubarraySumNaive should be defined', () => {
		expect(maxSubarraySumNaive).toBeDefined();
	});

	testConditions.forEach(([a, b, expected]) => {
		it(`${a}, ${b} should be ${expected}`, () => {
			const res = maxSubarraySumNaive(a, b);
			expect(res).toBe(expected);
		});
	});
	it('maxSubarraySum should be defined', () => {
		expect(maxSubarraySum).toBeDefined();
	});

	testConditions.forEach(([a, b, expected]) => {
		it(`${a}, ${b} should be ${expected}`, () => {
			const res = maxSubarraySum(a, b);
			expect(res).toBe(expected);
		});
	});
});
