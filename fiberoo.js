function fib(n = 50, a = 0, b = 1, arr = [0, 1]) {
  if (n <= 2) {
    return arr;
  }
  arr.push(a + b);
  return fib(n - 1, b, a + b, arr);
}
console.log(fib());

function numsToStrings(numbers) {
  return _.map(numbers, (num) => num.toString());
}
console.log(numsToStrings(fib()));

function numEvenNums(numbers) {
  return _.filter(numbers, (num) => num % 2 === 0).length;
}
console.log(numEvenNums(fib()));
