// function maxSubarraySum(arr, int) {
//   if (n > arr.length) {
//     return null;
//   }
//   let sum = -Infinity;
//   for (let i = 0; i < arr.length - int + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < int; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > sum) {
//       sum = temp;
//     }
//   }
//   return sum;
// }

// O(n)
function maxSubarraySum(arr, int) {
  if (arr.length < int) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < int; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = int; i < arr.length; i++) {
    tempSum = tempSum - arr[i - int] + arr[i];
    maxSum = math.max(maxSum, tempSum);
  }
  return maxSum;
}
