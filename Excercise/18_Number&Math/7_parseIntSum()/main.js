/** 
 * Sum all integers found in a comma-separated string.
 * @param {string} str - The string containing comma-separated integers.
 * @returns {number} The sum of the integers, or null if the string is invalid.
 */
function parseIntSum(str) {
    let result = str.split(", ");
    let sum = 0;

    for(let i = 0 ; i < result.length ; i++) {
        let n = result[i].trim();
        if( !parseInt(n)) {
            return null;
        }
        sum += parseInt(n);
    }

    return sum;
}

console.log(parseIntSum("1, 2, 3")); // 6
console.log(parseIntSum("10, 20, 30")); // 60
console.log(parseIntSum("  4, 5, -6")); // 3
console.log(parseIntSum("7, 8, abc")); // null
console.log(parseIntSum("100, , 200")); // null
console.log(parseIntSum("42")); // 42
console.log(parseIntSum("")); // null
console.log(parseIntSum("  -3, 7 , 11 ")); // 15