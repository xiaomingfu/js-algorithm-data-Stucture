// give an array of positve int and a positive int, if the sum of a contiguous subarray is greater or equal to the int, return the minimal length of  the subarray, else return 0
// function minSubArrayLen(arr, int) {
//   let slice = 1;
//   while (slice <= arr.length) {
//     let sum = 0;
//     for (var i = 0; i < slice; i++) {
//       sum += arr[i];
//     }
//     //    iterate arr, compare each element to int
//     while (i < arr.length + 1) {
//       if (sum >= int) {
//         return slice;
//       }
//       sum = sum - arr[i - slice] + arr[i];
//       i++;
//     }
//     slice++;
//   }
//   return 0;
// }

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= num[start];
      start++;
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
