// O(n)
// search the index of val in sorted array, return the index of the found val or return -1
// function search(arr, int) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === int) {
//       return i;
//     }
//   }
//   return -1;
// }

// binary search log(N)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let midPoint = Math.floor((min + max) / 2);
    let currentValue = arr[midPoint];
    if (currentValue < val) {
      min = midPoint + 1;
    } else if (currentValue > val) {
      max = midPoint - 1;
    } else {
      return midPoint;
    }
  }
  return -1;
}
