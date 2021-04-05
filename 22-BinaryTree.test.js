const { expect } = require("@jest/globals");
const { serialise } = require("./22-BinaryTree");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // ============ INSERT ============
  insert(value) {
    // 1. Create a new node
    const newNode = new Node(value);
    // 2. Start at the root
    // Check if there is root, if not root is now new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      // If there is root, check if value of new node is greater or lesser than value of root
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        const isLesser = value < current.value;
        const isGreater = value > current.value;

        // 4. If lesser
        if (isLesser) {
          // check if there is a left node
          if (current.left === null) {
            // if no left node, add new node to left
            current.left = newNode;
            return this;
          } else {
            // if there is left node, move to that node and repeat
            current = current.left;
          }
          // If greater,
        } else if (isGreater) {
          // check if there is a right node
          if (current.right === null) {
            // if no right right, add new node to right
            current.right = newNode;
            return this;
          } else {
            // if there is right node, move to that node and repeat
            current = current.right;
          }
        }
      }
      //
    }
  }

  // ========== FIND ==========

  find(searchValue) {
    // Check if there is root
    // If no root, done searching
    if (this.root === null) return console.log(false);
    // If there is root, check if value is what we are looking for
    // If so, done searching
    if (this.root.value === searchValue)
      return console.log({ result: true, node: this.root });

    // Otherwise,
    let current = this.root;
    while (true) {
      if (current.value === searchValue)
        return console.log({ result: true, node: current });
      // check if value is greater or lesser than value
      const isLesser = searchValue < current.value;
      const isGreater = searchValue > current.value;
      // If lesser,
      if (isLesser) {
        // check to see if there is a left node
        // If no, done searching
        if (current.left === null) return console.log(false);
        // If yes, move down to left node and check value
        current = current.left;
      }
      // If greater,
      if (isGreater) {
        // check to see if there is a right node
        // If no, done searching
        if (current.right === null) return console.log(false);
        // If yes, move down to right node and check value
        current = current.right;
      }
    }
  }
}

//        10
//    5       13
//   2  7    11  16

const tree = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);

test("serialisation of BST", () => {
  expect(serialise(tree.head)).toBe([
    "10",
    "5",
    "2",
    "X",
    "X",
    "7",
    "X",
    "X",
    "13",
    "11",
    "X",
    "X",
    "16",
    "X",
    "X",
  ]);
});
