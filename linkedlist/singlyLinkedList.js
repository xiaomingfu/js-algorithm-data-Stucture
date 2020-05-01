class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    var newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }
    var head = this.head;
    while (this.head.next.next) {
      this.head = this.head.next;
    }
    var delNode = this.head.next;
    this.head.next = null;
    this.tail = this.head;
    this.head = head;
    length--;
    return delNode;
  }
}
