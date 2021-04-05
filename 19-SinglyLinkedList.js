// ================ SINGLY LINKED LIST =====================

// Class for node

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Class for list

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //  ============ PUSH VALUE==============
  push(value) {
    // create a new node using value passed to the function
    const newNode = new Node(value);
    // if head is null, set the head and tail to be newly created node
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    // otherwise, set next property on the tail to be new node
    this.tail.next = newNode;
    // set tail of list to be new node
    this.tail = newNode;
    // increment length by one
    this.length++;
    return this;
  }

  //  ============ POP TAIL ==============
  pop() {
    // if there are no nodes, return undefined
    if (!this.head) return;
    // loop through list until reach tail
    let current = this.head;
    let removed;
    while (current) {
      if (current.next.next === null) {
        removed = current.next;
        // set the next property of 2nd to last node to be null
        current.next = null;
        // set the tail to be 2nd to last node
        this.tail = current;
      }
      current = current.next;
    }
    // decrement length of list by 1
    this.length--;
    // if length is nil, return null for head and tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return value of node removed
    return `removed: ${removed.value}`;
  }

  //  ============ SHIFT (REMOVE HEAD) ==============
  shift() {
    // if there are no node, return
    if (!this.head) return;
    // store current head proerty in variable
    let temp = this.head;
    // set head property to be current head's next property
    this.head = this.head.next;
    // decrement length by 1
    this.length--;
    // if length is nil, return null for head and tail
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return value of node removed
    return `removed head value ${temp.value}`;
  }
  //  ============ UNSHIFT (PREPEND A NEW HEAD) ==============
  unshift(value) {
    // create a new node using value passed
    const newNode = new Node(value);
    // if there is no head property, set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // otherwise, set newly created node next property to current head
    newNode.next = this.head;
    // set head property on list to be newly created node
    this.head = newNode;
    // increment length by 1
    this.length++;
    // return linked list
    return this;
  }

  //  ============ GET ==============
  get(index) {
    // if index is less than zero or greater than or equal to length of list, return null
    if (index < 0 || index >= this.length) return null;
    // loop through the list unil you reach the index and return the node at that specific index
    let position = 0;
    let current = this.head;
    while (true) {
      if (position === index) return current;
      current = current.next;
      position++;
    }
  }

  //  ============ SET ==============
  set(index, value) {
    // use GET function to find a specific node
    const foundNode = this.get(index);
    // if node is not found, return false
    if (!foundNode) return false;
    // if node is found, set value of that node to be the value passed to the function and return true
    foundNode.value = value;
    return true;
  }

  //  ============ INSERT ==============
  insert(index, value) {
    const newNode = new Node(value);
    // if index is less than zero or greater than length, return false
    if (index < 0 || index >= this.length) return false;
    // if index if same as the length, push a new node to the end of the list
    if (index === this.length) {
      this.push(newNode);
      return true;
    }
    // if index is 0, unshift a new node to the start of list
    if (index === 0) {
      this.unshift(newNode);
      return true;
    }
    // otherwise, use GET method to access node at index-1
    const foundNode = this.get(index - 1);
    console.log({ foundNode });
    // set next property of that foundNode to newNode
    const oldNext = foundNode.next;
    foundNode.next = newNode;
    // set the next property on the newNode to be the previous next
    newNode.next = oldNext;
    // increment length
    this.length++;
    // return true
    return true;
  }
  
  //  ============ REMOVE ==============
  remove(index) {
    // if index is less than zero or greater than length, return false
    if (index < 0 || index >= this.length) return false;
    // if index is same as length-1, POP
    if (index === this.length-1) this.pop()
    // if index is 0, shift
    if (index === 0) this.shift()
    // otherwise, use GET method to access ndoe at index-1
    const foundNode = this.get(index-1)
    // set next property on that node to be the next of the next node
    const removedNode = foundNode.next
    foundNode.next = foundNode.next.next
    // decrement length
    this.length--
    // return value of node removed
    return removedNode

  }

}

const list = new SinglyLinkedList();
list.push(10);
list.push(11);
list.push(12);
list.push(92);
list.push(56);
list.push(2);
console.log(list);
console.log(list.remove(1));
console.log(list);
