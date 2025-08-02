/**
 * Formats a full name by concatenating first name and last name.
 * If either firstName or lastName is null or undefined, it is replaced by an empty string.
 * @param {string|null|undefined} firstName - The first name.
 * @param {string|null|undefined} lastName - The last name.
 * @returns {string} - The formatted full name.
 */
const formatName = (firstName, lastName) => {
    return `${firstName ?? ""} ${lastName ?? ""}`;
} 

// Sample usage
console.log(formatName("John", "Doe")); // John Doe
console.log(formatName(null, "Doe"));   // Doe
console.log(formatName("John"));        // John
console.log(formatName());              //