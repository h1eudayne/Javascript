/**
 * capitalize: Capitalize the first letter of each word in a string
 * @param {string} str - The input string.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capitalize(str) {
    return str.split(" ").map((word) => {
        if(!word) {
            return "";
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(" ");
}

// Sample usage
console.log(capitalize("hello world")); // "Hello World"
console.log(capitalize("javascript is fun")); // "Javascript Is Fun"
console.log(capitalize("CAPITALIZE THIS SENTENCE")); // "Capitalize This Sentence"
console.log(capitalize("   multiple    spaces  ")); // "   Multiple    Spaces  "
console.log(capitalize("")); // ""