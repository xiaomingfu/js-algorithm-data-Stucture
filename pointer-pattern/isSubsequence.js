// take two strings, if the first string is in the second string with the same char and order, return true, else return false
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) {
    return false;
  }

  let i = 0;
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}
