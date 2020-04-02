// take an object and covert all of the values which are numbers to strings
function stringifyNumbers(obj) {
  let newObj = {};
  // loop the values of the objects

  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      newObj[key] = value.toString();
    } else if (typeof value === "object" && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}
