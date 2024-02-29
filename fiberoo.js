// Write a function called fib() that returns an array containing the first 50
// Fibonacci numbers. By definition, the first two numbers in the Fibonacci
// sequence are 0 and 1, and each subsequent number is the sum of the previous
// two. As an example, here are the first 10 Fibonacci numbers:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
// (To construct this list, just use a FOR loop; underscore does not make
// your life easier here.)
function fib(n = 50, a = 0, b = 1, arr = [0, 1]) {
  if (n <= 2) {
    return arr;
  }
  arr.push(a + b);
  return fib(n - 1, b, a + b, arr);
}
console.log(fib());

// This function takes an array of numbers, and returns a new array of strings,
// where each string is the string version of the number in the original array.
function numsToStrings(numbers) {
  return _.map(numbers, (num) => num.toString());
}
console.log(numsToStrings(fib()));

// This function takes an array of numbers, and returns a number indicating the
// number of even numbers (i.e. divisible by two) in the original list of numbers.
function numEvenNums(numbers) {
  return _.filter(numbers, (num) => num % 2 === 0).length;
}
console.log(numEvenNums(fib()));
