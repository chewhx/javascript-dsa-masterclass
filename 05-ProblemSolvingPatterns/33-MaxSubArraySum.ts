/**
 * Write a function which accepts an array of integers and a number called 'n'. The function should calculate the maximum sum of 'n' consecutive elements in the array.
 */

/**
 *
 * @param {Array<number>} array
 * @param {number} n
 * @returns {number}
 */
export function maxSubarraySumNaive(array: number[], n: number): number | null {
	if (array.length < n) return null;

	let max: number = -Infinity;
	let temp: number;

	for (let i = 0; i < array.length - n + 1; i++) {
		temp = 0;
		for (let j = 0; j < n; j++) {
			temp += array[i + j];
		}
		if (temp > max) {
			max = temp;
		}
	}
	return max;
}

/**
 * Sliding window solution
 * - Instead of starting the loop again, just minus the previous number and add the next number
 * - Slide the box/window over to the right
 * @param {number[]} array
 * @param {number} n
 * @returns {number | null}
 */

export function maxSubarraySum(array: number[], n: number): number | null {
	// If array has no values, return null
	if (array.length < n) return null;

	// Create two variables to hold indexes, where the no. of elements in the window" [a, _, _, b] is n
	// If n=4, a=0, b=3, iterating through elements at index '0' and '3'
	// "the window":
	let a = 0;
	let b = n - 1;

	// Create two variables which will hold the sum of numbers and compare
	let max = 0;
	let temp = 0;

	// While 'b' the upper index figure does not exceed array.length
	while (b < array.length) {
		// We reset temp to '0' each time
		temp = 0;
		// Iterate through the window of indexes and sum up the elements at each index
		// if a = 0, b = 3
		// we sum up the elements at index 0,1,2,3, and assing to temp
		for (let i = a; i <= b; i++) {
			temp += array[i];
		}
		// Se check if temp is larger than max, if so we update max to the value at temp
		// this ensures that we always have the max value possible when adding up all the elements in the "window"
		if (temp > max) {
			max = temp;
		}
		// We repeat the process by increasing the index of 'a' and 'b' by 1, thereby shifting the window to the right, until 'b' reaches the array.length
		a++;
		b++;
	}
	// Return the max number
	return max;
}
