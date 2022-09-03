class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
		this.tail = null;
	}

	/**
	 * Push value
	 * @param {any} value
	 * @returns {Node}
	 */
	push(value) {
		const newNode = new Node(value);

		// If head is null, set the head and tail to be newly created node
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}

		if (this.tail) {
			// Otherwise, set next property on the tail to be new node
			this.tail.next = newNode;
			// Set tail of list to be new node
			this.tail = newNode;
		}

		// Increment length by one
		this.length++;
		return newNode;
	}

	/**
	 * Pop value
	 * @returns {Node | null}
	 */
	pop() {
		// If there are no nodes, return false
		if (!this.head) return null;

		// Loop through list until reach tail
		let current = this.head;
		let toPop;
		while (current) {
			if (current.next.next === null) {
				toPop = current.next;
				// Set the next property of 2nd to last node to be null
				current.next = null;
				// Set the tail to be 2nd last node
				this.tail = current;
			}
			current = current.next;
		}

		// Decrement length of list by 1
		this.length--;

		// if length is nil, set head and tail to null
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return toPop;
	}

	/**
	 * Remove head
	 * @returns {Node|null}
	 */
	shift() {
		// If there are no node, return
		if (!this.head) return;

		// Store current head in temp var
		let temp = this.head;

		// Set head property to be current head's next property
		this.head = this.head.next;

		// decrement length by 1
		this.length--;

		// If length is zero, set head and tail to null
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}

		return temp;
	}

	/**
	 * Push to head
	 * @returns {Node|null}
	 */
	unshift(value) {
		const newNode = new Node(value);

		// If there is no head, set the head and tail to be the newly created node
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
			return newNode;
		}

		// Otherwise, set newly created node next property to current head
		newNode.next = this.head;

		// Set head property on list to be newly created node
		this.head = newNode;

		// Increment length by 1
		this.length++;

		return newNode;
	}

	/**
	 * Get node at index
	 * @returns {Node|null}
	 */
	get(index) {
		// If index is less than zero or greater than or equal to length of list, return null
		if (index < 0 || index >= this.length) return null;

		// Loop through the list unil you reach the index and return the node at that specific index
		let loopIndex = 0;
		let current = this.head;
		while (true) {
			if (loopIndex === index) return current;
			current = current.next;
			loopIndex++;
		}
	}

	/**
	 * Set value of node at index
	 * @returns {Node|null}
	 */
	set(index, value) {
		// Get node at specified index
		const node = this.get(index);

		// If node is not found, return null
		if (!node) return null;

		// If node is found, set value of node
		node.value = value;

		return node;
	}

	/**
	 * Insert new node at index
	 * @returns {Node|null}
	 */
	insert(index, value) {
		const newNode = new Node(value);

		// If index is less than zero or greater than length, return null
		if (index < 0 || index > this.length) return null;

		// If index if same as the length, push a new node
		if (index === this.length) {
			return this.push(newNode);
		}

		// If index is 0, unshift a new node
		if (index === 0) {
			return this.unshift(newNode);
		}

		// Otherwise, get node at index-1
		const parentNode = this.get(index - 1);

		// Copy parentNode's next
		const childNode = parentNode.next;

		// Set next property of that parentNode to newNode
		parentNode.next = newNode;

		// Set the next property on the newNode to be the child node
		newNode.next = childNode;

		// Increment length
		this.length++;

		return newNode;
	}

	//  ============ REMOVE ==============
	remove(index) {
		// If index is less than zero or greater than length, return null
		if (index < 0 || index >= this.length) return null;

		// If index is same as length-1, pop node
		if (index === this.length - 1) {
			return this.pop();
		}

		// If index is 0, shift node
		if (index === 0) {
			return this.shift();
		}

		// Otherwise, get node at index - 1
		const parentNode = this.get(index - 1);

		// Copy node to be removed
		const removedNode = parentNode.next;

		// Set next property on that node to be "the next of the next node"
		parentNode.next = parentNode.next.next;

		// decrement length
		this.length--;

		// return value of node removed
		return removedNode;
	}
}

module.exports = { Node, SinglyLinkedList };
