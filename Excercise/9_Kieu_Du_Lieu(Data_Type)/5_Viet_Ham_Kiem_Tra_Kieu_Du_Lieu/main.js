import { isString, 
  isNumber,
  isBigInt,
  isBoolean,
  isNull,
  isUndefined,
  isSymbol,
  isObject,
  isArray,
  isFunction } from "./functions.js";

// Sample usage
console.log(isString("Hello")); // true
console.log(isString(123));     // false

// // Sample usage
// console.log(isNumber(123)); // true
// console.log(isNumber(NaN)); // false

// // Sample usage
// console.log(isBigInt(9007199254740991n)); // true
// console.log(isBigInt(123));              // false

// // Sample usage
// console.log(isBoolean(false)); // true
// console.log(isBoolean(0));     // false

// // Sample usage
// console.log(isNull(null));  // true
// console.log(isNull("null")); // false

// // Sample usage
// console.log(isUndefined(undefined)); // true
// console.log(isUndefined(null));      // false

// // Sample usage
// console.log(isSymbol(Symbol("unique"))); // true
// console.log(isSymbol("unique"));         // false

// // Sample usage
// console.log(isObject({ name: "Alice" })); // true
// console.log(isObject([1, 2, 3]));         // false

// // Sample usage
// console.log(isArray([1, 2, 3])); // true
// console.log(isArray("text"));    // false

// // Sample usage
// console.log(isFunction(function() {})); // true
// console.log(isFunction({}));            // false