function maxSubarraySum(arr, int) {
  if (!arr.length) {
    return null;
  }
  let sum = 0;
  for (let i = 0; i < arr.length - int; i++) {
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
