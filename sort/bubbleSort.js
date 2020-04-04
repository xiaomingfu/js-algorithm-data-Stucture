function bubbleSort(arr) {
  // loop through arr with index i from arr.length -1 to start
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

bubbleSort([35, 2, 5, 64, 32, 43, 24, 6, 1]);
