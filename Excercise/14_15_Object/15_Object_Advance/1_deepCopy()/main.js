/**
 * Creates a deep copy of an object or array.
 * @param {Object|Array} obj - The object or array to copy.
 * @returns {Object|Array} - A deep copy of the original object or array.
 */
function deepCopy(obj) {
  return structuredClone(obj);
}

// Sample usage
const originalArray = [1, 2, { a: 3, b: 4 }];
const copiedArray = deepCopy(originalArray);
copiedArray[2].a = 10;
console.log(originalArray[2].a); // 3

const originalObject = {
  name: "John",
  details: { age: 25, address: { city: "New York" } },
};
const copiedObject = deepCopy(originalObject);
copiedObject.details.address.city = "Los Angeles";
console.log(originalObject.details.address.city); // "New York"
