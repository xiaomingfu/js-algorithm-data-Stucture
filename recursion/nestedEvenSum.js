// gvie an object, return the sum of all even numbers
function nestedEvenSum(obj) {
  let sum = 0;

  let keys = Object.keys(obj);
  if (keys.length === 0) {
    return sum;
  }
  for (key of keys) {
    if (obj.key % 2 === 0) {
      sum = sum + obj.key;
    }
    if (typeof obj.key === "object") {
      sum = sum + nestedEvenSum(obj.key);
    }
  }
}
