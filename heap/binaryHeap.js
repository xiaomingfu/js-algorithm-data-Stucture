class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp(value);
    return this;
  }

  bubbleUp(value) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= value) {
        break;
      }
      this.values[parentIdx] = value;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  //   extractMax() {
  //     let idx = this.values.length - 1;
  //     let root = this.values[0];
  //     this.values[0] = this.values[idx];
  //     this.values[idx] = root;
  //     idx = 0;
  //     this.values.pop();

  //     while (( idx * 2 + 2) < this.values.length) {
  //       let leftIdx = idx * 2 + 1;
  //       let rightIdx = idx * 2 + 2;
  //       let left = this.values[leftIdx];
  //       let right = this.values[rightIdx];
  //       let current = this.values[idx];
  //       if (current > left && current > right) {
  //         break;
  //       }
  //       if (current < left && current < right) {
  //         if (left > right) {
  //           this.values[leftIdx] = current;
  //           this.values[idx] = left;
  //           idx = leftIdx;
  //         } else if (right > left) {
  //           this.values[rightIdx] = current;
  //           this.values[idx] = right;
  //           idx = rightIdx;
  //         }
  //       } else if (current < right) {
  //         this.values[rightIdx] = current;
  //         this.values[idx] = right;
  //         idx = rightIdx;
  //       } else if (current < left) {
  //         this.values[leftIdx] = current;
  //         this.values[idx] = left;
  //         idx = leftIdx;
  //       }
  //     }
  //     return root;
  //   }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const current = this.values[0];
    const length = this.values.length;
    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < length) {
        leftChild = this.values[leftIdx];
        if (leftChild > current) {
          swap = leftIdx;
        }
      }
      if (rightIdx < length) {
        rightChild = this.values[rigthIdx];
        if (
          (swap === null && rightChild > current) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = current;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
