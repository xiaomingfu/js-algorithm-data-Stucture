function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return fasle;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3], [4, 9]);
same([1, 2, 3], [1, 9]);
same([1, 2, 1], (4, 4, 1));
// compacity 0(n^2)
