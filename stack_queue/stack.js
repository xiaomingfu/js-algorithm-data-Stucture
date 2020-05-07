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
      this.first = oldFirst;
    }
    return this.size++;
  }
  pop() {
    if (!this.first) {
      return null;
    }
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let oldLast = this.first;
      this.first = oldLast.next;
      oldLast.next = null;
    }
    this.size--;
    return oldLast.value;
  }
}
