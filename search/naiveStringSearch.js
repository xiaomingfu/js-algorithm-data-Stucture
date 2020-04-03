// give two strings, check if the second string is in the first string, if so count the frequence and return the count
function naiveStringSearch(str1, str2) {
  let i = 0;

  let count = 0;
  while (i < str1.length) {
    let j = 0;
    while (j < str2.length) {
      if (str1[i] === str2[j]) {
        j++;
        i++;
      } else {
        i++;
        break;
      }
    }
    if (j === str2.length) {
      count++;
    }
  }
  return count;
}
