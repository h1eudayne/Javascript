/** 
 * Compares two primitive values for equality, including NaN.
 * @param {*} a - The first value to compare.
 * @param {*} b - The second value to compare.
 * @returns {boolean|string} - True if both values are primitive and equal (including NaN), otherwise false. 
 * Returns "Invalid input" if any value is not primitive.
 */
function isPrimitive(value) {
    return (value === null) || (typeof value !== "object" && typeof value !== "function");
}

function comparePrimitives(a, b) {
    if(isPrimitive(a) && isPrimitive(b)) {
        if(Number.isNaN(a) && Number.isNaN(b)) {
            return true;
        }
        return a === b;
    }
    return "Invalid input";
}

// Sample usage
console.log(comparePrimitives(5, 5)); // true
console.log(comparePrimitives(NaN, NaN)); // true
console.log(comparePrimitives(null, null)); // true
console.log(comparePrimitives("hello", "hello")); // true
console.log(comparePrimitives(true, false)); // false
console.log(comparePrimitives(5, "5")); // false
console.log(comparePrimitives({
    name: "John"
}, {
    name: "John"
})); // "Invalid input"
console.log(comparePrimitives(42, {})); // "Invalid input"