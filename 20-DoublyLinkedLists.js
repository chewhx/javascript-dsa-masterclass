// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// DLL Class
class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ===== PUSH =====
  // Append new node

  push(value) {
    // Create a new node with value
    const newNode = new Node(value);
    // If head is null, set head and tail to be new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // If not, set next property on the tail to be that node
    if (this.head) {
      this.tail.next = newNode;
      // Set previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      // Set tail to be newly created node
      this.tail = newNode;
      // Increment the length
      this.length++;
    }
    return this;
  }

  // ====== POP =====
  // Remove node from end of list
  pop(value) {
    // if no head, return undefined
    if (!this.head) return undefined;
    // store current tail in a variable to be return later
    let oldTail = this.tail;
    // if length is 11, set head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    if (this.length > 1) {
      // update tail to be the previous node
      this.tail = oldTail.prev;
      // set new tail's next to null
      this.tail.next = null;
      oldTail.prev = null;
    }
    // decrement length
    this.length--;
    // return value removed
    return oldTail;
  }

  // ===== SHIFT =====
  // Remove node from beginning of list
  shift() {
    // if length is 0, return undefined
    if (this.length === 0) return undefined;
    // store current head in variable to return
    let oldHead = this.head;
    // if length is 1
    if (this.length === 1) {
      // set head and tail to be null
      this.head = null;
      this.tail = null;
    }
    if (this.length > 1) {
      // update head to be next of old head
      this.head = oldHead.next;
      // set new head's prev to be null
      this.head.prev = null;
      // set old head's next to be null
      oldHead.next = null;
    }
    // decrement the length
    this.length--;
    return oldHead;
  }

  // ===== UNSHIFT =====
  // Add new node to beginning of list

  unshift(value) {
    // create new node with value
    const newNode = new Node(value);
    // if length if 0
    if (this.length === 0) {
      // set head to be new node
      this.head = newNode;
      // set tail to be new node
      this.tail = newNode;
    }
    // otherwise
    if (this.length > 0) {
      // set prev property of current head to be new node
      this.head.prev = newNode;
      // set next property of new node to be current head
      newNode.next = this.head;
      // update head to be new node
      this.head = newNode;
    }
    // increment length
    this.length++;
    return this;
  }

  // ===== GET =====
  // Get item at index
  // In DLL we count either from the beginning or end of list depending on which side is nearer

  get(index) {
    // if index is less than 0, or greater or equal to length of list, return null
    if (index < 0 || index >= this.length) return null;

    let mid = Math.floor(this.length / 2);
    // if index is less than or equal to half of length of list
    if (index <= mid) {
      let counter = 0;
      let currentNode = this.head;
      // loop through list from head
      while (counter !== index) {
        // return node once found
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    // if index is greater than half the length of list
    if (index > mid) {
      let counter = this.length - 1;
      let currentNode = this.tail;
      // loop through list from tail
      while (counter !== index) {
        // return node once found
        currentNode = currentNode.prev;
        counter--;
      }
      return currentNode;
    }
  }

  // ===== SET ======
  // Set the value at index
  // Makes use of GET

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  // ===== INSERT =====
  // Insert a new node at the index position
  insert(index, value) {
    // if index is less than zero or greater or equal to length, return false
    if (index < 0 || index >= this.length) return false;
    // if index is 0, call UNSHIFT
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    // if index is same as length, call PUSH
    if (index === this.length) {
      this.push(value);
      return true;
    }
    // otherwise, use GET method to access index - 1
    const newPrevNode = this.get(index - 1);
    const newNode = new Node(value);
    const newNextNode = newPrevNode.next;
    // set next and prev properties on the correct nodes to link
    newNode.prev = newPrevNode;
    newNode.next = newNextNode;
    newPrevNode.next = newNode;
    newNextNode.prev = newNode;
    // increment length
    this.length++;
    // return true
    return true;
  }

  // ===== REMOVE =====
  // Remove item from index
  remove(index) {
    // if index is less than zero or greater than or equal to the length, return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if index is 0, call UNSHIFT
    if (index === 0) return this.unshift;
    // if index is same as length-1, call POP
    if (index === this.length - 1) return this.pop;
    // otherwise, call GET to retrieve the item to be removed
    const foundNode = this.get(index);
    const prevNode = foundNode.prev;
    const nextNode = foundNode.next;
    // update next and prev propreties to remove the found node from list
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    // set next and prev to null on the found node
    foundNode.next = null;
    foundNode.prev = null;
    // decrement the length
    this.length--
    // return the removed node
    return foundNode
  }

  // ===== PRINT =====
  print() {
    let currentNode = this.head;
    let array = [];
    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({ array, head: this.head, tail: this.tail });
  }
}

const list = new DLL();
list.push("index 0");
list.push("index 1");
list.push("index 2");
list.push("index 3");
list.push("index 4");
list.push("index 5");
list.push("index 6");
list.push("index 7");
list.remove(2)
console.log("newPrevNode", list.get(1));
console.log("newNode", list.get(2));
console.log("newNextNode", list.get(3));
// list.print();
// console.log(list.pop(53));
