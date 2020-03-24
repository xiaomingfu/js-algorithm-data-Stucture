// give a sorted arr of int and a number, if there is a pair of values where the average equals the number return true, else return false

function averagePair(arr, num) {
  let small = 0;
  let big = arr.length - 1;
  while (small < big) {
    let average = (arr[small] + arr[big]) / 2;
    if (average === num) {
      return true;
    } else if (average > num) {
      big--;
    } else {
      small++;
    }
  }
  return false;
}
