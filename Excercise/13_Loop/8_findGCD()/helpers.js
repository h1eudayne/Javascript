/**
 * Checks if a value is an integer in the simplest way.
 * @param {any} value - The value to check.
 * @returns {boolean} True if value is an integer, false otherwise.
 */
export function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
}