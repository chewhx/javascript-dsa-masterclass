const {
	areThereDuplicatesByFrequencyCounter,
	areThereDuplicatesByMultiplePointers,
} = require('./areThereDuplicates');

describe('areThereDuplicates', () => {
	it('areThereDuplicatesByFrequencyCounter should be defined', () => {
		expect(areThereDuplicatesByFrequencyCounter).toBeDefined();
	});

	it('1,2,3 should be false', () => {
		const res = areThereDuplicatesByFrequencyCounter(1, 2, 3);
		const expected = false;

		expect(res).toBe(expected);
	});

	it('1,2,2 should be true', () => {
		const res = areThereDuplicatesByFrequencyCounter(1, 2, 2);
		const expected = true;

		expect(res).toBe(expected);
	});

	it('2, 3, 4, 5, 1, 5, 3 should be true', () => {
		const res = areThereDuplicatesByFrequencyCounter(2, 3, 4, 5, 1, 5, 3);
		const expected = true;

		expect(res).toBe(expected);
	});

	it('areThereDuplicatesByMultiplePointers should be defined', () => {
		expect(areThereDuplicatesByMultiplePointers).toBeDefined();
	});

	it('1,2,3 should be false', () => {
		const res = areThereDuplicatesByMultiplePointers(1, 2, 3);
		const expected = false;

		expect(res).toBe(expected);
	});

	it('1,2,2 should be true', () => {
		const res = areThereDuplicatesByMultiplePointers(1, 2, 2);
		const expected = true;

		expect(res).toBe(expected);
	});

	it('2, 3, 4, 5, 1, 5, 3 should be true', () => {
		const res = areThereDuplicatesByMultiplePointers(2, 3, 4, 5, 1, 5, 3);
		const expected = true;

		expect(res).toBe(expected);
	});
});
