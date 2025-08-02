/**
 * Function returns the length of the input string
 * @param {string} str - The string to get the length of
 * @returns {number} - The length of the string
 */
function getStringLength(str) {
    return typeof str === "string" ? str.length : "Invalid input";
}

// Sample usage
console.log(getStringLength("hello")); // 5
console.log(getStringLength("")); // 0
console.log(getStringLength("JavaScript")); // 10
console.log(getStringLength(123)); // "Invalid input"
console.log(getStringLength(null)); // "Invalid input"
console.log(getStringLength(undefined)); // "Invalid input"