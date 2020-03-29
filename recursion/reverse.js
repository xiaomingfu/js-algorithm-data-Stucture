// give a string and return a new reversed string
// function reverse(str) {
//   let len = str.length;
//   if (!len) return "";

//   return "" + str[len - 1] + reverse(str.slice(0, len - 1));
// }
function reverse(str) {
  if (str.length <= 0) {
    return str;
  }
  return reverse(str.slice(1) + str[0]);
}
