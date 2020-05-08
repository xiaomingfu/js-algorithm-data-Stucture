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

  search(val) {
    if (!this.root) {
      return;
    }
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      }
      if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.root.right = new Node(15);
