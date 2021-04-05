// Breath First Search (BFS)
// Depth First Search (DFS):
  // DFS Pre-order Search
  // DFS Post-order Search
  // DFS In-order Search



const tree = {
  value: 10,
  left: {
    value: 6,
    left: { value: 3, left: null, right: null },
    right: { value: 8, left: null, right: null },
  },
  right: {
    value: 15,
    left: null,
    right: { value: 20, left: null, right: null },
  },
};

//  ============= BREATH FIRST SEARCH =================

//          10
//      6       15
//    3   8   x    20
//
//  [ 10, 6, 15, 3, 8, 20 ]

// console.log(BFS(tree));

function BFS(rootNode) {
  // Create a queue and a variable to store the values of nodes visited
  let queue = [];
  let visited = [];
  // Place root node in the queue
  queue.push(rootNode);
  // Loop as long as there is anything in the queue
  while (queue.length) {
    // Dequeue a node from the queue and push the value of the node into visited
    const value = queue[0].value;
    visited.push(value);
    // Check if there is a left property
    if (queue[0].left) {
      // Add it to queue
      queue.push(queue[0].left);
    }
    // Check if there is a right property
    if (queue[0].right) {
      // Add it to queue
      queue.push(queue[0].right);
    }
    queue.shift();
  }

  return visited;
}


//  ============= DEPTH FIRST SEARCH (PRE-ORDER)=================

//          10
//      6       15
//    3   8   x    20

//  [10, 6, 3, 8, 15, 20]

// console.log(DFS_PreOrder(tree));

function DFS_PreOrder(rootNode) {
  // Create a variable to store the values of node visited
  let visited = [];
  // Store root of BST in a variable called current
  const current = rootNode;
  // Helper function which accepts a node
  function helper(node) {
    // Push value of node to variable that stores the values
    visited.push(node.value);
    // If node has left property, call helper function with left property on node
    if (node.left) {
      helper(node.left);
    }
    // If node has right property, call helper function with right property on node
    if (node.right) {
      helper(node.right);
    }
  }
  helper(current);
  return visited;
}

//  ============= DEPTH FIRST SEARCH (POST-ORDER)=================

//          10
//      6       15
//    3   8   x    20

// [3, 8, 6, 20, 15, 10]
// console.log(DFS_PostOrder(tree));

function DFS_PostOrder(rootNode) {
  // Create a variable to store the values of node visited
  let visited = [];
  // Store root of BST in a variable called current
  const current = rootNode;
  // Helper function which accepts a node
  function helper(node) {
    // If node has left property, call helper function with left property on node
    if (node.left) {
      helper(node.left);
    }
    // If node has right property, call helper function with right property on node
    if (node.right) {
      helper(node.right);
    }
    // Push value of node to variable that stores the values
    visited.push(node.value);
  }
  helper(current);
  return visited;
}

//  ============= DEPTH FIRST SEARCH (IN-ORDER)=================

//          10
//      6       15
//    3   8   x    20

// [3, 6, 8, 10, 15, 20]
console.log(DFS_InOrder(tree));

function DFS_InOrder(rootNode) {
  // Create a variable to store the values of node visited
  let visited = [];
  // Store root of BST in a variable called current
  const current = rootNode;
  // Helper function which accepts a node
  function helper(node) {
    // If node has left property, call helper function with left property on node
    if (node.left) {
      helper(node.left);
    }
    // Push value of node to variable that stores the values
    visited.push(node.value);
    // If node has right property, call helper function with right property on node
    if (node.right) {
      helper(node.right);
    }
  }
  helper(current);
  return visited;
}
