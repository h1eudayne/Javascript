/**
 * Calculates the expression (a + b) * c if all inputs are valid numbers.
 * @param {number} a - First value.
 * @param {number} b - Second value.
 * @param {number} c - Third value.
 * @returns {number|string} - The result of the expression or "Invalid input" if any input is invalid.
 */
function calculateExpression(a, b, c) {
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        return "Invalid input";
    }
    return (a + b) * c;
}

// Sample usage
console.log(calculateExpression(2, 3, 4));    // 20
console.log(calculateExpression(2, NaN, 4));  // "Invalid input"
console.log(calculateExpression(2, 3, NaN));  // "Invalid input"
console.log(calculateExpression(NaN, 3, 4));  // "Invalid input"