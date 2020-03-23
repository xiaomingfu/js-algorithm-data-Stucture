function maxSubarraySum(arr, int) {
  if (n > arr.length) {
    return null;
  }
  let sum = -Infinity;
  for (let i = 0; i < arr.length - int + 1; i++) {
    let temp = 0;
    for (let j = 0; j < int; j++) {
      temp += arr[i + j];
    }
    if (temp > sum) {
      sum = temp;
    }
  }
  return sum;
}
