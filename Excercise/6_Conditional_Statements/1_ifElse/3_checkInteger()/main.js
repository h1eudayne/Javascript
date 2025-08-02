/**
 * Determines if a number is an integer or not.
 */
const checkInteger = (number) => {
  if (number % 1 !== 0) {
    return "Không phải số nguyên";
  } else {
    return "Số nguyên";
  }
};

// Sample usage
console.log(checkInteger(4)); // Số nguyên
console.log(checkInteger(3.14)); // Không phải số nguyên
