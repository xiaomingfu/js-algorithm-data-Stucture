function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i] + arr[j]];
    } else if (sum > 0) {
      j--;
    } else {
      i++;
    }
  }
}

// naive
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i] + arr[j]];
//       }
//     }
//   }
// }
