/**
 * Calculates the result based on the given operator and operands.
 * @param {string} a - The first operand as a string.
 * @param {string} b - The second operand as a string.
 * @param {string} operator - The operator to perform ("add", "subtract", "multiply", "divide").
 * @returns {number|string} - The result of the calculation or an error message.
 */
function calculate(a, b, operator) {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) {
        return "Invalid input number";
    }

    switch (operator) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

// Sample usage
console.log(calculate("5", "3", "add"));      // 8
console.log(calculate("5", "3", "subtract")); // 2
console.log(calculate("5", "3", "multiply")); // 15
console.log(calculate("5", "0", "divide"));   // Cannot divide by zero
console.log(calculate("five", "3", "add"));   // Invalid input number
console.log(calculate("5", "three", "add"));  // Invalid input number
console.log(calculate("5", "3", "modulus"));  // Invalid operator