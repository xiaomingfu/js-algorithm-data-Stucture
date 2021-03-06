class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) {
          return undefined;
        }
        if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    if (!this.root) {
      return false;
    }
    let current = this.root;

    while (current) {
      if (current.val === val) {
        return true;
      }
      if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  traverseBFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push([this.root]);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return data;
  }
  // preOrder
  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }

  // postOrder
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node);
    }
    traverse(this.root);
    return data;
  }

  // inOrder
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.root.right = new Node(15);
