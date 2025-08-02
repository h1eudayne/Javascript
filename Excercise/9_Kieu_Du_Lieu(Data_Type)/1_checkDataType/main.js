/**
 * Function checkDataType returns the data type of a given value.
 */
const checkDataType = (a) => {
  return (typeof a);
}

// Sample usage
console.log(checkDataType(42)); // number
console.log(checkDataType("Hello World")); // string
console.log(checkDataType({ name: "John" })); // object