export function getElement(array, index, defaultValue) {
  if (array[index] !== null && array[index] !== undefined) {
    return array[index];
  }
  return defaultValue;
}


// function getElement(array, index, defaultValue) {
//   const value = array[index];
//   if (value !== null && value !== undefined)
//     return value;
//   return defaultValue;
// }


// function getElement(array, index, defaultValue) {
//   const value = array[index];
//   const hasValue = value !== null && value !== undefined;
//   return hasValue ? array[index] : defaultValue;
// }
