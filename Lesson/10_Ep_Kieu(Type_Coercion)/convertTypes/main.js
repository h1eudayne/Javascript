/**
 * Converts the given value to the specified type.
 * @param {any} value - The value to be converted.
 * @param {string} type - The type to convert to ("number", "string", "boolean").
 * @returns {any} - The converted value, or "Invalid type" if the type is not valid.
 */
const convertDataType = (value, type) => {
    if(type === "number") {
        return +value;
    }
    else if (type === "string") {
        return String(value);
    }
    else if(type === "boolean") {
        return !!value;
    }
    else {
        return "Invalid type";
    }
}

// Sample usage
console.log(convertDataType("123", "number")); // 123
console.log(convertDataType(123, "string"));   // "123"
console.log(convertDataType(1, "boolean"));    // true
console.log(convertDataType(123, "object"));   // Invalid type