/**
 * Counts the number of NaN values in an array or object.
 * @param {*} input - The array or object to be checked.
 * @returns {number|string} - Returns the count of NaN values or "Invalid input" if the input is not valid.
 */
function countNaNValues(input) {
    if(Array.isArray(input)) {
        return input.filter(value => value !== value).length;
    } else if(typeof input === "object") {
        return Object.values(input).filter(value => value !== value).length;
    }
    
    return "Invalid input";
}

// Sample usage
console.log(countNaNValues([1, 2, NaN, 4, NaN])); // 2
console.log(countNaNValues({
    a: 1,
    b: NaN,
    c: 3,
    d: NaN
})); // 2
console.log(countNaNValues(123)); // "Invalid input"
console.log(countNaNValues("NaN")); // "Invalid input"