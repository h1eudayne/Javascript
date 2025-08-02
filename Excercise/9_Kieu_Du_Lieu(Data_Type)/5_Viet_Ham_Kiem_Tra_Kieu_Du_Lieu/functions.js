/**
 * Checks if the input is a string
 * @param {*} input - The input to check
 * @return {boolean} - True if input is a string, false otherwise
 */
export function isString(input) {
    return typeof input === "string";
  }
  
  /**
   * Checks if the input is a number and not NaN
   * @param {*} input - The input to check
   * @return {boolean} - True if input is a number and not NaN, false otherwise
   */
  export function isNumber(input) {
    return typeof input === "number" && !isNaN(input);
  }
  
  /**
   * Checks if the input is a BigInt
   * @param {*} input - The input to check
   * @return {boolean} - True if input is a BigInt, false otherwise
   */
  export function isBigInt(input) {
    return typeof input === "bigint";
  }
  
  /**
   * Checks if the input is a boolean
   * @param {*} input - The input to check
   * @return {boolean} - True if input is a boolean, false otherwise
   */
  export function isBoolean(input) {
    return typeof input === "boolean";
  }
  
  /**
   * Checks if the input is null
   * @param {*} input - The input to check
   * @return {boolean} - True if input is null, false otherwise
   */
  export function isNull(input) {
    return input === null;
  }
  
  /**
   * Checks if the input is undefined
   * @param {*} input - The input to check
   * @return {boolean} - True if input is undefined, false otherwise
   */
  export function isUndefined(input) {
    return typeof input === "undefined";
  }
  
  /**
   * Checks if the input is a symbol
   * @param {*} input - The input to check
   * @return {boolean} - True if input is a symbol, false otherwise
   */
  export function isSymbol(input) {
    return typeof input === "symbol";
  }
  
  /**
   * Checks if the input is an object excluding arrays and null
   * @param {*} input - The input to check
   * @return {boolean} - True if input is an object, false otherwise
   */
  export function isObject(input) {
    if((typeof input === "object") && (input !== null) && (!Array.isArray(input))) {
      return true;
    }
    else {
      return false;
    }
  }
  
  /**
   * Checks if the input is an array
   * @param {*} input - The input to check
   * @return {boolean} - True if input is an array, false otherwise
   */
  export function isArray(input) {
    return Array.isArray(input);
  }
  
  /**
   * Checks if the input is a function
   * @param {*} input - The input to check
   * @return {boolean} - True if input is a function, false otherwise
   */
  export function isFunction(input) {
    return typeof input === "function";
  } 
  