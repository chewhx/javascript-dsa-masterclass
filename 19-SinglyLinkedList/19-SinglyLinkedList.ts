// ================ SINGLY LINKED LIST =====================

interface INode {
	value: any;
	next: INode | null;
}

export class Node implements INode {
	public value: any;
	public next: INode | null;

	constructor(value: any) {
		this.value = value;
		this.next = null;
	}
}

interface ISinglyLinkedList {
	length: number;
	head: INode | null;
	tail: INode | null;
}

export class SinglyLinkedList implements ISinglyLinkedList {
	public length: number;
	public head: INode | null;
	public tail: INode | null;

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
	push(value: any): Node {
		const newNode = new Node(value);

		// If head is null, set the head and tail to be newly created node
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return newNode;
		}

		if (this.tail) {
			// Otherwise, set next property on the tail to be new node
			this.tail.next = newNode;
			// Set tail of list to be new node
			this.tail = newNode;
			// Increment length by one
			this.length++;
		}

		return newNode;
	}

	/**
	 * Pop value
	 * @returns {Node | null}
	 */
	pop(): Node | null {
		// If there are no nodes, return false
		if (!this.head) return null;

		// Loop through list until reach tail
		let current: INode | null = this.head;
		let toPop: INode | null = null;

		while (current) {
			if (current?.next?.next === null) {
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
	shift(): Node | null {
		// If there are no node, return
		if (!this.head) return null;

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
	unshift(value: any): Node | null {
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
	get(index: number): Node | null {
		// If index is less than zero or greater than or equal to length of list, return null
		if (index < 0 || index >= this.length) return null;

		// Loop through the list unil you reach the index and return the node at that specific index
		let loopIndex = 0;
		let current = this.head;
		while (true) {
			if (loopIndex === index) return current;
			current = current?.next ?? null;
			loopIndex++;
		}
	}

	/**
	 * Set value of node at index
	 * @returns {Node|null}
	 */
	set(index: number, value: any): Node | null {
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
	insert(index: number, value: any): Node | null {
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
		const childNode = parentNode?.next;

		if (parentNode) {
			// Set next property of that parentNode to newNode
			parentNode.next = newNode;
		}

		if (newNode) {
			// Set the next property on the newNode to be the child node
			newNode.next = childNode ?? null;
		}

		// Increment length
		this.length++;

		return newNode;
	}

	//  ============ REMOVE ==============
	remove(index: number): Node | null {
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
		const removedNode = parentNode?.next ?? null;

		if (parentNode !== null) {
			// Set next property on that node to be "the next of the next node"
			parentNode.next = parentNode?.next?.next ?? null;
		}

		// decrement length
		this.length--;

		// return value of node removed
		return removedNode;
	}
}
