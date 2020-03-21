function same(arr1, arr2) {
  // if two array's length is different, return fasle
  if (arr1.length !== arr2.length) {
    return false;
  }
  //   constructor two objects to count every val's frequency
  let counter1 = {};
  let counter2 = {};
  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }
  //   check counter2's key is squared of counter1's key
  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter1[key] !== counter2[key ** 2]) {
      return fasle;
    }
  }

  return true;
}

same([1, 2, 3], [1, 4, 9]);
// compacity 0(n)
