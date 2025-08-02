/**
 * Compare two strings and return the longer string.
 * If they have the same length, return the first string.
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} - The longer string, or the first string if they are the same length.
 */
const compareStrings = (str1 , str2) => {
    return str1.length >= str2.length ? str1 : str2;
}

// Sample usage
console.log(compareStrings("apple", "banana")); // "banana"
console.log(compareStrings("cherry", "plum"));  // "cherry"
console.log(compareStrings("mango", "kiwi"));   // "mango"
console.log(compareStrings("apple", "mango"));  // "apple"