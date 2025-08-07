/**
 * Function compareDataTypes checks if two values have the same data type.
 */
const compareDataTypes = (a,b) => {
  if((typeof a) === (typeof b)) {
      return true;
  }
  else {
      return false;
  }
}

// Sample usage
console.log(compareDataTypes(10, 20)); // true
console.log(compareDataTypes("hello", true)); // false