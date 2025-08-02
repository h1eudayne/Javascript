/**
 * Swaps two numbers without using a temporary variable.
 */
function swapNumbers(a, b) {
  let c = a;
  a = b;
  b = c;

  return `${a}, ${b}`;
}

// Sample usage
console.log(swapNumbers(5, 7)); // 7, 5
console.log(swapNumbers(1, 5)); // 5, 1
