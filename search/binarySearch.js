// give a sorted array and a value and return the index at which the value exists otherwise, return -1

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
