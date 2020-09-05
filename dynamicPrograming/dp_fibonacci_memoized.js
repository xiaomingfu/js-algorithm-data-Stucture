function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n === 1 || n === 2) return 1;
  var res = fib_memo(n - 1, memo) + fib_memo(n - 2, memo);
  memo[n] = res;
  return res;
}

function fib_table(n) {
  if (n === 1 || n === 2) return 1;
  let fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    table[n] = table[n - 1] + table[n - 2];
  }
  return fibNums[n];
}
