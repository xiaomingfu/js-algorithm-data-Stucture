// give an array if there is a child array, extract every values from that array
// and return a new array with all the values extracted and all single values in the parent array
function flatten(arr) {
  let newArr = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    let val = arr.shift();
    if (!Array.isArray(val)) {
      newArr.push(val);
    } else {
      helper(val);
    }
    helper(arr);
  }
  helper(arr);
  return newArr;
}
