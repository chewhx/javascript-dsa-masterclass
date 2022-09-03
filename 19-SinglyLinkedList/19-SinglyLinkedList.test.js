// @ts-check
const { SinglyLinkedList, Node } = require('./19-SinglyLinkedList');

describe('19-SinglyLinkedList', () => {
	/** @type {import("./19-SinglyLinkedList").SinglyLinkedList}*/
	let list;

	beforeAll(() => {
		list = new SinglyLinkedList();
	});

	it('SinglyLinkedList is defined', () => {
		expect(SinglyLinkedList).toBeDefined();
	});

	it('Can push values', () => {
		const res1 = list.push(1);

		expect(res1).toBeInstanceOf(Node);
		expect(list.head).toMatchObject(res1);
		expect(list.tail).toMatchObject(res1);
		expect(list.length).toBe(1);

		list.push(2);
		list.push(3);
		list.push(4);
		list.push(5);
		list.push(6);

		const res7 = list.push(7);

		expect(list.head).toMatchObject(res1);
		expect(list.tail).toMatchObject(res7);
		expect(list.length).toBe(7);
	});

	it('Can pop values', () => {
		const pop = list.pop();

		expect(pop).toMatchSnapshot(new Node(7));
		expect(list.length).toBe(6);
		expect(list.tail).toMatchObject(new Node(6));
		expect(list.head.value).toBe(1);
		expect(list.head.next.value).toBe(2);
	});

	it('Can shift value (pop from head)', () => {
		const shift = list.shift();

		expect(shift?.value).toBe(1);
		expect(shift?.next).toMatchObject(list.head);
		expect(list.length).toBe(5);
		expect(list.tail).toMatchObject(new Node(6));
		expect(list.head.value).toBe(2);
		expect(list.head.next.value).toBe(3);
	});

	it('Can unshift value (push to head)', () => {
		list.unshift(1);
		list.unshift(0);
		const unshift = list.unshift(-1);

		expect(unshift).toBe(list.head);
		expect(list.head.next.value).toBe(0);
		expect(list.length).toBe(8);
	});

	it('Can get node at index', () => {
		const node = list.get(4);

		expect(node?.value).toBe(3);
		expect(list.get(0)?.value).toBe(-1);
		expect(list.get(-1)).toBe(null);
		expect(list.get(list.length)).toBe(null);
		expect(list.get(list.length + 1)).toBe(null);
	});

	it('Can set node value at index', () => {
		const node = list.set(7, '6');

		expect(node?.value).toBe('6');
		expect(list.set(-1, '')).toBe(null);
		expect(list.set(8, '')).toBe(null);
	});

	it.todo('Can insert new node at index');
	it.todo('Can remove node at index');
});
