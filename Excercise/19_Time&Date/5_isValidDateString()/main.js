/** 
 * Checks if a string can be converted into a valid Date
 * @param {string} dateString - The string to check
 * @returns {boolean} - true if the string can be converted into a valid Date, false otherwise
 */
function isValidDateString(dateString) {
    let date = new Date(dateString);
    return !isNaN(date.getTime());
}

// Sample usage
console.log(isValidDateString('2021-10-15')); // true
console.log(isValidDateString('invalid-date')); // false
console.log(isValidDateString('10:10 30/02/2022')); // false
console.log(isValidDateString('2021-12-31T23:59:59')); // true