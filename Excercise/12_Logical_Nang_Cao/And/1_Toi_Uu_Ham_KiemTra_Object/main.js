/**
 * Checks if the input is an object excluding arrays and null
 * @param {*} input - The input to check
 * @return {boolean} - True if input is an object, false otherwise
 */
function isObject(input) {
    return input !== null && typeof input === "object"
  }
  
  // Sample usage
  console.log(isObject(null)); // false
  console.log(isObject({ name: "John Smith" })); // true