class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    if (this.length === 0) {
      return;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = temp.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    }
    let mid = Math.floor(this.length / 2);
    let current;
    if (idx <= mid) {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  set(idx, val) {
    let foundedNode = this.get(idx);
    if (!foundedNode) {
      return false;
    }
    foundedNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.lengh) {
      return false;
    }
    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let newNode = new Node(val);
      let beforeNode = this.get(idx - 1);
      let afterNode = beforeNode.next;
      beforeNode.next = newNode;
      newNode.prev = beforeNode;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      this.length++;
    }
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) {
      return;
    }
    if (idx === 0) {
      return this.unshift();
    } else if (idx === this.length - 1) {
      return this.pop();
    } else {
      let removedNode = this.get(idx);
      removedNode.prev.next = removedNode.next;
      removedNode.next.prev = removedNode.prev;
      removedNode.next = null;
      removedNode.prev = null;
      this.length--;
      return removedNode;
    }
  }
}
