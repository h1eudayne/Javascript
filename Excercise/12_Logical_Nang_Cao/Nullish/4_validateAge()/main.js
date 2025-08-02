/**
 * Validates if the age is a valid positive number, or returns an error message if it's null or undefined.
 * @param {number|null|undefined} age - The age to validate.
 * @returns {boolean|string} - True if age is a valid positive number, false if invalid, or an error message if null/undefined.
 */
const validateAge = (age) => {
    const message = "Error: Age is null or undefined";
    const validAge = age ?? message;
    if(validAge === message) {
        return message;
    }
    return !isNaN(validAge) && typeof(validAge) === "number" && validAge >= 0;
}


// Sample usage
console.log(validateAge(25));    // true
console.log(validateAge(null));  // "Error: Age is null or undefined"
console.log(validateAge(-5));    // false