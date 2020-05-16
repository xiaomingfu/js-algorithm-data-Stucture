class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let idx = this.values.length - 1;
    this.values.push(value);
  }

  bubbleUp(value) {}
}
