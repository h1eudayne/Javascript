/**
 * Function checks if the input string is a palindrome
 * @param {string} str - The string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    if(typeof str !== "string") {
        return "Invalid input";
    }
    return str.toLowerCase().split("").reverse().join("") === str.toLowerCase() ? true : false;
}

// Sample usage
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Level")); // true
console.log(isPalindrome(12321)); // "Invalid input"
console.log(isPalindrome("")); // true