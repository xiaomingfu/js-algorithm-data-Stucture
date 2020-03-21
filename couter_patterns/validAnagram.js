function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  //   constructor two object with characters in str1 and str2 and count their frequency
  let counter1 = {};
  let counter2 = {};
  for (let char of str1.slice("")) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (let char of str2.slice("")) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  for (key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }
  return true;
}
