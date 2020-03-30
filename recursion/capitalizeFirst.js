// five a array of strings, return with every string with capital letter
function capitalizeFirst(arr) {
  let newArr = [];
  function helper(arr) {
    if (arr.length === 0) {
      return;
    }
    let word = arr.shift();
    newArr.push(word[0].toUpperCase() + word.slice(1));
    helper(arr);
  }
  helper(arr);
  return newArr;
}
