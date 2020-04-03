// give two strings, check if the second string is in the first string, if so count the frequence and return the count
function naiveStringSearch(str1, str2) {
  var count = 0;
  for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < str2.length; j++) {
      if (str1[i + j] !== str2[j]) {
        break;
      }
    }
    if (j === str2.length - 1) {
      count++;
    }
  }
  return count;
}
