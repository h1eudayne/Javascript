/**
 * Returns the element at the specified index, or the default value if the element is null or undefined.
 * @param {Array} array - The array to retrieve the element from.
 * @param {number} index - The index of the element to retrieve.
 * @param {*} defaultValue - The default value to return if the element is null or undefined.
 * @returns {*} - The element at the specified index, or the default value.
 */
const getElement = (array, index, defaultValue) => {
    return array[index] ?? defaultValue;
}
// Sample usage
const colors = ["Red", "Green", null, "Blue", ""];

console.log(getElement(colors, 0, "Unknown")); // Red
console.log(getElement(colors, 2, "Unknown")); // Unknown
console.log(getElement(colors, 4, "Unknown")); // 
console.log(getElement(colors, 5, "Unknown")); // Unknown