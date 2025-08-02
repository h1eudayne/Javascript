/**
 * truncateByWordsTrimmed: Truncate a string by words, removing extra spaces
 * @param {string} str - The input string.
 * @param {number} maxWords - The maximum number of words.
 * @returns {string} - The truncated string with "..." if necessary.
 */
function truncateByWordsTrimmed(str, maxWords) {
    const words = str.split(" ");

    const result = words.filter(word => word !== "");

    if (result.length <= maxWords) {
        return result.join(" ");
    }

    return result.slice(0, maxWords).join(" ") + "...";

}

// Sample usage
console.log(truncateByWordsTrimmed("Hello   World this    is   a   test", 3)); // "Hello World this..."
console.log(truncateByWordsTrimmed("   JavaScript     is   fun  ", 5)); // "JavaScript is fun"
console.log(truncateByWordsTrimmed("Learning   to    code   ", 2)); // "Learning to..."
console.log(truncateByWordsTrimmed("Short    string", 3)); // "Short string"