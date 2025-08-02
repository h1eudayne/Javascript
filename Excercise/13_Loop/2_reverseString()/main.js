/**
 * Reverses a string.
 *
 * @param {string} str - The string to be reversed
 * @returns {string} The reversed string
 */
const reverseString = (str) => {
    let reversed = "";
    for(let i = str.length - 1; i >= 0 ; i-- ) {
        reversed += str[i];
    }
    return reversed;
}
// Sample usage
console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow
console.log(reverseString("JavaScript")); // tpircSavaJ