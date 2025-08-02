/**
 * Prints the Fibonacci sequence up to a value not exceeding n.
 * @param {number} n - The upper limit for the values in the Fibonacci sequence to be printed.
 */
const printFibonacci = (n) => {
  let a = 0,
    b = 1,
    next;
  console.log(a);
  while (b <= n) {
    console.log(b);
    next = a + b;
    a = b;
    b = next;
  }
};

// Sample usage
printFibonacci(5); // 0, 1, 1, 2, 3, 5
printFibonacci(10); // 0, 1, 1, 2, 3, 5, 8
