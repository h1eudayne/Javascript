/**
 * capitalizeFirst: Capitalize the first character of the string and trim leading/trailing spaces
 * @param {string} str - The input string (paragraph).
 * @returns {string} - The string with the first letter capitalized and trimmed spaces.
 */
function capitalizeFirst(str) {
    let first = str.trim().slice(0, 1).toUpperCase();
    let second = str.trim().slice(1);
    return first.concat(second);
}

// Sample usage
console.log(capitalizeFirst("  hello world! This is a test.  ")); // "Hello world! This is a test."
console.log(capitalizeFirst("javaScript is fun.")); // "JavaScript is fun."
console.log(capitalizeFirst("    ")); // ""
console.log(capitalizeFirst("   leading spaces removed")); // "Leading spaces removed"