function countUniqueValues(arr) {
  let i = 0;
  let j = 1;
  if (!arr.length) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
      j++;
    }
  }
  return i + 1;
}
