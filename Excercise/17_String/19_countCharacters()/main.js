/**
 * Function that returns the actual length of a string,
 * correctly handling emojis and special characters.
 *
 * @param {string} str - The input string which may contain emojis and special characters.
 * @returns {number|string} - Returns the number of characters in the string. 
 * If the input is not a string, it returns "Invalid input".
 */
function countCharacters(str) {
    if(typeof str !== "string") {
        return "Invalid input";
    }

    return Array.from(str).length;
}

// Sample usage
console.log(countCharacters("Hello")); // 5
console.log(countCharacters("👋🌍")); // 2
console.log(countCharacters("Hi 👋, how are you?")); // 18
console.log(countCharacters("😊😇🌟✨💥")); // 5
console.log(countCharacters("")); // 0
console.log(countCharacters(123)); // "Invalid input"
console.log(countCharacters({})); // "Invalid input"