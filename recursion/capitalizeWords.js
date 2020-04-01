// give an array of words, and return a new array with all capitalized letter
function capitalizeWords(arr) {
  let newArr = [];
  //   loop the arr and loop each word
  if (arr.length <= 0) {
    return newArr;
  }
  let firstWord = arr.shift();
  newArr.push(firstWord.toUpperCase());

  return newArr.concat(capitalizeWords(arr));
}
