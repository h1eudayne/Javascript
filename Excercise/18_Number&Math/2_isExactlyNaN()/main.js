/**
 * Checks if the value is exactly NaN.
 * @param {*} value - The value to be checked.
 * @returns {boolean} - Returns true if value is exactly NaN, otherwise false.
 */
function isExactlyNaN(value) {
    return Number.isNaN(value);
}

// Sample usage
console.log(isExactlyNaN(NaN)); // true
console.log(isExactlyNaN(123)); // false
console.log(isExactlyNaN("NaN")); // false
console.log(isExactlyNaN(undefined)); // false
console.log(isExactlyNaN(0 / 0)); // true
console.log(isExactlyNaN(Infinity)); // false