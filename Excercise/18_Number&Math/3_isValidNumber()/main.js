/**
 * Checks if the value is a valid number.
 * @param {*} value - The value to be checked.
 * @returns {boolean} - Returns true if value is a valid number, otherwise false.
 */
function isValidNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

// Sample usage
console.log(isValidNumber(123)); // true
console.log(isValidNumber(NaN)); // false
console.log(isValidNumber("123")); // false
console.log(isValidNumber(undefined)); // false
console.log(isValidNumber(0 / 0)); // false
console.log(isValidNumber(Infinity)); // true