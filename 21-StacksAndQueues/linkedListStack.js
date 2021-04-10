// Node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Stack class

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //  ====== prepend =====
  // for constant time
  push(value) {
    // create a new node
    const newNode = new Node(value);
    // if there are no nodes, set the first and last property to be the newly created node
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    // if there are at least one node
    if (this.size > 0) {
      // create a variable to store the current first property on the stack
      const oldFirst = this.first;
      // reset first property to be newly created node
      this.first = newNode;
      // set next propoerty of new first to previous created variable
      this.first.next = oldFirst;
    }
    // increment size by 1
    return ++this.size;
  }

  //  ====== pop from the front =====
  // for constant time
  pop() {
    // if no nodes in stack, return null
    if (this.size === 0) return null;
    // create temp var to store first property on stack
    let oldFirst = this.first;
    // if only one node, set first and last property to be null
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    // if more than one node, set first property to be next property on current first
    if (this.size > 1) {
      this.first = oldFirst.next;
    }
    // decrement size by 1
    this.size--;
    // return value of node removec
    return oldFirst.value;
  }
}

let stack = new Stack();
console.log(stack.push("123"));
console.log(stack.push("41gf"));
console.log(stack.push("gdfsg"));
console.log(stack.pop());
