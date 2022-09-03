const { averagePair } = require('./averagePair');

const testConditions = [
	[[1, 2, 3], 2.5, true],
	[[1, 3, 3, 5, 6, 7, 10, 12, 19], 8, true],
	[[-1, 0, 3, 4, 5, 6], 4.1, false],
	[[], 4, false],
];

describe('averagePair', () => {
	it('is defined', () => {
		expect(averagePair).toBeDefined();
	});

	testConditions.forEach(([a, b, expected]) => {
		it(`${a}, ${b} to be ${expected}`, () => {
			const res = averagePair(a, b);
			expect(res).toBe(expected);
		});
	});
});
