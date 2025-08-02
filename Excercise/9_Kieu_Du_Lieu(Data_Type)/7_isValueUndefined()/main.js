/**
 * Checks if the given value is undefined.
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is undefined, otherwise false.
 */
function isValueUndefined(value) {
  return value === void 0;
}

// Sample usage
console.log(isValueUndefined(undefined)); // true
console.log(isValueUndefined(void 0)); // true
console.log(isValueUndefined(null)); // false
console.log(isValueUndefined(0)); // false
console.log(isValueUndefined("")); // false
