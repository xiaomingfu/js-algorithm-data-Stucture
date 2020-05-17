class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) {
        break;
      }
      this.values[idx] = parent;
      this.values[parentIdx] = element;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const last = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = last;
      this.sinkDown();
    }
    return min;
  }

  sinkDown() {
    const val = this.values[0];
    const len = this.values.length;
    let idx = 0;

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let leftChild;
      let rightChild;
      let swap = null;
      if (leftIdx < len) {
        leftChild = this.values[leftIdx];
        if (val.priority > leftChild.priority) {
          swap === leftIdx;
        }
      }
      if (rightIdx < len) {
        rightChild = this.values[rightIdx];
        if (
          (val.priority > rightChild.priority && !swap) ||
          (leftChild.priority > rightChild.priority && swap)
        ) {
          swap === rightIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = val;
      idx = swap;
    }
  }
}
