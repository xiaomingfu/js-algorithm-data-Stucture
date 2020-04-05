function selectionSort(arr) {
  // set the first element as the smallest

  // compare the smallest to the rest arr, if there is one smaller than it, set the temp smaller value to it
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    // then swap the index of the two element
    if (i !== smallest) {
      let temp = arr[i];
      arr[i] = arr[smallest];
      arr[smallest] = temp;
    }
  }
  return arr;
}
