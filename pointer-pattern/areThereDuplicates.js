// give some args, if some of the args is same, return true, else fasle.
// Time-O(n) Space- O(n)

function areThereDuplicates(...args) {
  // create object to counter frequency of each arg
  let counter = {};
  for (let arg of args) {
    counter[arg] = (counter[arg] || 0) + 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
}
