/** 
 * Checks if a Date object is valid
 * @param {Date} date - The Date object to check
 * @returns {boolean} - true if valid, false if invalid
 */
function isValidDate(date) {
    return !isNaN(date);
}

// Sample usage
console.log(isValidDate(new Date())); // true
console.log(isValidDate(new Date('2021-10-15'))); // true
console.log(isValidDate(new Date('invalid-date'))); // false
console.log(isValidDate('2021-10-15')); // false
console.log(isValidDate({})); // false