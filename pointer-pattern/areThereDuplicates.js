// give some args, if some of the args is same, return true, else fasle.
// Time-O(n) Space- O(n)

// frequency counter
// function areThereDuplicates() {
//   // create object to counter frequency of each arg
//   let counter = {};
//   //   arguments are array-like object
//   for (let val in args) {
//     counter[arguments[val]] = (counter[arguments[val]] || 0) + 1;
//   }
//   for (let key in counter) {
//     if (counter[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// multiple pointers
function areThereDuplicates(...args) {
  args.sort((a, b) => a - b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

// log(n)
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
