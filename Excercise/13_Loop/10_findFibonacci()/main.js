/**
 * Finds the nth Fibonacci number.
 * @param {number} n - The position in the Fibonacci sequence.
 * @returns {number} The nth Fibonacci number.
 */

const findFibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

  let a = 0,
    b = 1,
    next;
  let count = 2;

  while (count <= n) {
    next = a + b;
    a = b;
    b = next;
    count++;
  }
  return b;
};

// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, v.v
// Sample usage
console.log(findFibonacci(0)); // 0
console.log(findFibonacci(1)); // 1
console.log(findFibonacci(3)); // 2
console.log(findFibonacci(8)); // 21
