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
        while(true) {
            if (val === current.val) {
                return undefined;
            }
            if (val < current.val) {
                if (!current.val) {
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

  compare(v1, v2){
    if
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.root.right = new Node(15);
