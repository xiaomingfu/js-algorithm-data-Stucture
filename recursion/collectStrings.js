// give an object and return an array contains all the values in the object is string
function collectStrings(obj) {
  let arr = [];
  for (let value of Object.values(obj)) {
    if (typeof value === "string") {
      arr.push(value);
    } else if (typeof value === "object") {
      arr = arr.concat(collectStrings(value));
    }
  }
  return arr;
}
