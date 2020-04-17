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
