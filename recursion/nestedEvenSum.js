// gvie an object, return the sum of all even numbers
function nestedEvenSum(obj) {
  var sum = 0;

  let values = Object.values(obj);
  for (let value of values) {
    if (typeof value === "number" && value % 2 === 0) {
      sum = sum + value;
    } else if (typeof value === "object") {
      sum = sum + nestedEvenSum(value);
    }
  }
  return sum;
}
