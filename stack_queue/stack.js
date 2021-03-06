class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      let oldFirst = this.first;
      node.last = oldFirst;
      this.first = node;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    let oldFirst = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = oldFirst.next;
      oldFirst.next = null;
    }
    this.size--;
    return oldFirst.val;
  }
}
