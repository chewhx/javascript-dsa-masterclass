// MAX BINARY HEAP

class BinaryHeap {
  constructor() {
    this.values = [];
  }

  // ==== INSERT ====
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  // ==== BUBBLE UP ====
  bubbleUp() {
    // create a var which is the len of the values property less 1, which is also the index of last added item
    let childIndex = this.values.length - 1;
    // keep looping as long as values element at the parentIndex is less than values element at the child index
    while (childIndex > 0) {
      // create a var parentIndex - floor of (index-1)/2
      let parentIndex = Math.floor((childIndex - 1) / 2);
      // swap the value of the values element at the parentIndex with the value of the element property at children index
      if (this.values[parentIndex] >= this.values[childIndex]) break;
      let temp = this.values[childIndex];
      this.values[childIndex] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      // set index to be the parentIndex and startover
      childIndex = parentIndex;
    }
  }

  // ==== REMOVE ====
  extract() {
    if (this.values.length < 1) return undefined
    console.log("before pop: " + this.values);
    // swap the first/root value with the last one
    let temp = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values[this.values.length - 1] = temp;
    // store the last value for return
    let poppedValue = this.values[this.values.length - 1];
    //  pop the last value
    this.values.pop();
    // execute sink down
    this.sinkDown();
    // return poppedvalue
    return poppedValue;
  }

  // ==== SINK DOWN ====
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
      let largerChild =
        childLeftEl > childRightEl
          ? childLeftEl
          : childLeftEl < childRightEl
          ? childRightEl
          : !childRightEl
          ? childLeftEl
          : childRightEl;

      let largerChildIndex = this.values.indexOf(largerChild);
      // If largerChild is larger than parent element, swap them
      console.log({
        lengthLimit,
        largerChild,
        largerChildIndex,
        childLeftEl,
        childRightEl,
        parentEl,
      });
      if (!largerChild) break;
      if (largerChild < parentEl) break;
      if (largerChild > parentEl) {
        let temp = parentEl;
        this.values[parentIndex] = largerChild;
        this.values[largerChildIndex] = temp;
      }
      // The child index you swapped to now, becomes the new parent index
      parentIndex = largerChildIndex;
      // Keep looping and swapping until neither children is larger than the element
    }
  }
}

let heap = new BinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.extract();
heap.extract();
heap.extract();
heap.extract();
heap.extract();
heap.extract();
heap.extract();
heap.extract();

console.log(heap);
