/**
 * Checks if a value is "truthy" in JavaScript.
 * A "truthy" value is one that converts to true when evaluated in a boolean context.
 * This function returns true for "truthy" values, and false otherwise.
 * 
 * @param {any} value - The value to be checked for truthiness.
 * @returns {boolean} - Returns true if the value is truthy, otherwise returns false.
 */
const isTruthy = (value) => {
  if(value) {
      return true;
  }
  else {
      return false;
  }
}

// Sample usage
console.log(isTruthy(1));        // true
console.log(isTruthy(false));    // false
console.log(isTruthy("hello"));  // true
console.log(isTruthy(0));        // false