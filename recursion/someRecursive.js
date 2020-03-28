// give an array and a callback, return false when all value return false after passed to the callback
function someRecursive(arr, cb) {
  if (!arr.length) return false;
  if (cb(arr[0])) return true;
  return someRecursive(arr.slice(1), cb);
}
