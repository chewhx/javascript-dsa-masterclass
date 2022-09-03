/**
 * Given a sorted array of integer and a target number. Find out if there is a pair of values which average is the target number. There may be more than a pair of values which gives the target average.
 */

/**
 *
 * @param {number[]} array
 * @param {number} target
 * @returns {boolean}
 */
export function averagePair(array: number[], target: number): boolean {
	// If array length is less than 2, return false - not possible for find average
	if (array.length < 2) return false;

	// Set two pointers, a = 0, b = 1
	let a = 0;
	let b = array.length - 1;

	// While 'a' does not exceed array.length, and 'b' is not less than 0
	while (a < array.length && b !== 0) {
		// Check if average for number at a and b equals to the target number
		let average = (array[a] + array[b]) / 2;
		// If so return true
		if (average === target) return true;
		// If average of number at a and b is more than target, b--
		if (average > target) b--;
		// If average of number at a and b is less than target, a++
		if (average < target) a++;
	}
	// Otherwise, return false
	return false;
}
