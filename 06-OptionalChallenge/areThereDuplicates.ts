/**
 * Accepts a variable number of arguments, and checks whether there are any duplicates among the arguements passed in. You can solve this with frequency counter pattern OR multiple pointers pattern
 */

/**
 * Frequency Counter - Accepts a variable number of arguments, and checks whether there are any duplicates among the arguements passed in.
 * @param  {number[]} args
 * @returns {boolean}
 */
export function areThereDuplicatesByFrequencyCounter(...args: number[]) {
	if (args.length < 1) return null;

	const counter: Record<number, number> = {};

	for (let each of args) {
		counter[each] = counter[each] + 1 || 1;
		if (counter[each] > 1) return true;
	}

	return false;
}

/**
 * Multiple Pointers - Accepts a variable number of arguments, and checks whether there are any duplicates among the arguements passed in.
 * @param  {number[]} args
 * @returns {boolean}
 */
export function areThereDuplicatesByMultiplePointers(...args: number[]) {
	// Sort the array from small to large
	const _args = args.sort((a, b) => a - b);
	// Create a window that checks two values, a=0  and b=a+1
	let a = 0;
	let b = 1;

	// While b does not exceed args.length
	while (b < _args.length) {
		// Check if value at arg[a] is equal to arg[b]
		if (_args[a] === _args[b]) return true;
		a++;
		b++;
	}

	return false;
}
