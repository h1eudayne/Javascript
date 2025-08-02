/**
 * truncateString: Truncate a string to a specified maxLength and add "..." if truncated
 * @param {string} str - The input string to be truncated.
 * @param {number} maxLength - The maximum length of the truncated string including "...".
 * @returns {string} - The truncated string with "..." if necessary.
 */
function truncateString(str, maxLength) {
    if (maxLength < 3) {
        return str.slice(0, maxLength);
    }
    else if (str.length > maxLength) {
        return str.slice(0, maxLength - 3) + "...";
    }
    return str;
}

// Sample usage
console.log(truncateString("Hello World", 8)); // "Hello..."
console.log(truncateString("Hello World", 11)); // "Hello World"
console.log(truncateString("This is a test", 10)); // "This is..."
console.log(truncateString("Short", 10)); // "Short"
console.log(truncateString("Sample usage", 5)); // "Sa..."
console.log(truncateString("Sample usage", 2)); // "Sa"