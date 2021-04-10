// === NODE ===
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// ==== PRIORITY QUEUE CLASS ====
// Min Binary Heap - the most important items gets remove first, 1 is the highest priority
class PQ {
  constructor() {
    this.values = [];
  }

  // ==== ENQUEUE ====
  // push to the array and rearrange by priority
  enqueue(value, priority) {
    // create a new node
    const newNode = new Node(value, priority);
    // push the node into the array
    this.values.push(newNode);
    // execute bubbleUp to place high priority items on top
    this.bubbleUp();
  }

  /*
  [
    {value:"fsda", priority: 2},
    {value:"dsfa", priority: 1},
  ]
    
  */

  bubbleUp() {
    // create a var which is the len of the values property less 1, which is also the index of last added item
    let childIndex = this.values.length - 1;
    // keep looping as long as values element at the parentIndex is more than values element at the child index
    while (childIndex > 0) {
      // create a var parentIndex - floor of (index-1)/2
      let parentIndex = Math.floor((childIndex - 1) / 2);
      // swap the nodes, if the priority of the child node is less than (more important) the parent node
      if (
        this.values[parentIndex]["priority"] <=
        this.values[childIndex]["priority"]
      )
        break;
      let temp = this.values[childIndex];
      this.values[childIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      // set index to be the parentIndex and startover
      childIndex = parentIndex;
    }
  }

  // ==== DEQUEUE ====
  // Remove the root and shift the top priority up
  dequeue() {
    // swap the root and the lowest node
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    // pop the lowest node
    const poppedValue = this.values[this.values.length - 1];
    this.values.pop(this.values[this.values.length - 1]);
    // sink down the root node
    this.sinkDown();
    // return popped value
    return poppedValue;
  }

  sinkDown() {
    const lengthLimit = this.values.length - 1;
    // parent index starts at 0
    let parentIndex = 0;
    let parentEl = this.values[parentIndex];
    while (true) {
      console.log("after pop: " + this.values);
      // find index of left child (making sure not out of bounds)
      let childIndexL = parentIndex * 2 + 1;
      let childLeftEl = this.values[childIndexL];
      // find index of right child (making sure not out of bounds)
      let childIndexR = parentIndex * 2 + 2;
      let childRightEl = this.values[childIndexR];
      // break if both child index are larger, meaning no children
      // Find the larger child
      let smallerChild = !childLeftEl
        ? childRightEl
        : !childRightEl
        ? childLeftEl
        : childLeftEl.priority < childRightEl.priority
        ? childLeftEl
        : childLeftEl.priority > childRightEl.priority
        ? childRightEl
        : childLeftEl;

      let smallerChildIndex = this.values.indexOf(smallerChild);
      // If largerChild is larger than parent element, swap them
      console.log({
        lengthLimit,
        smallerChild,
        smallerChildIndex,
        childLeftEl,
        childRightEl,
        parentEl,
      });
      if (!smallerChild) break;
      if (smallerChild.priority > parentEl.priority) break;
      if (smallerChild.priority < parentEl.priority) {
        let temp = parentEl;
        this.values[parentIndex] = smallerChild;
        this.values[smallerChildIndex] = temp;
      }
      // The child index you swapped to now, becomes the new parent index
      parentIndex = smallerChildIndex;
      // Keep looping and swapping until neither children is larger than the element
    }
  }
}

let queue = new PQ();
queue.enqueue("1st added", 1111);
queue.enqueue("2nd added", 111);
queue.enqueue("3rd added", 11);
queue.enqueue("4th added", 2222);
queue.enqueue("5th added", 222);
queue.enqueue("6th added", 22);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue);
