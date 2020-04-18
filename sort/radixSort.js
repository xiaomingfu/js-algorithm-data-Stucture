// return the digit in num at the given place value
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.paw(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radix(arr) {
  let maxDigits = maxDigits(arr);
  for (let i = 0; i < maxDigits; i++) {
    let grid = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      grid[digit].push(arr[j]);
    }
  }
}
