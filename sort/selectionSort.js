function selectionSort(arr) {
  // set the first element as the smallest

  // compare the smallest to the rest arr, if there is one smaller than it, set the temp smaller value to it
  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    for (let j = i; j < arr.length; j++) {
      var tempSmallest = Infinity;
      tempSmallest = Math.min(tempSmallest, arr[j]);
    }
    // then swap the index of the two element
    let temp = tempSmallest;
    tempSmallest = smallest;
    smallest = temp;
  }
  return arr;
}
