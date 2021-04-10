// Node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Queue class
// add to the end and remove from the beginning, more efficient

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // ==== ENQUEUE ====
  // Add to the end
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    if (this.size > 0) {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // ==== DEQUEUE ====
  // Remove from the beginning
  dequeue() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    if (this.size > 1) {
      this.first = temp.next;
    }
    this.size--;
    return temp;
  }
}

let queue = new Queue();
queue.enqueue("123");
queue.enqueue("232");
queue.enqueue("333");
queue.dequeue();
console.log(queue);
