/** 
 * Checks if a string is a valid date and returns it in ISO 8601 format
 * @param {string} input - The string or timestamp to check
 * @returns {string | null} - ISO 8601 date string if valid, otherwise null
 */
function formatToISO(input) {
    const result = new Date(input);

    return isNaN(result.getTime()) ? null : result.toISOString();
}

// Sample usage
console.log(formatToISO('2021-10-15')); // '2021-10-15T00:00:00.000Z'
console.log(formatToISO('invalid-date')); // null
console.log(formatToISO('2022-02-30')); // '2022-03-02T00:00:00.000Z'
console.log(formatToISO(1726025622297)); // '2024-09-11T03:33:42.297Z'