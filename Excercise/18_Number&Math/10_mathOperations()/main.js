/**
 * Perform various mathematical operations on the input number.
 *
 * @param {number} num - The number to perform operations on.
 * @returns {Object} An object containing the results of the operations.
 */
function mathOperations(num) {
    return {
        absolute : Math.abs(num),
        ceiled : Math.ceil(num),
        floored : Math.floor(num),
        rounded : Math.round(num)
    }
}

// Sample usage
console.log(mathOperations(-5.7));
/* 
{
    absolute: 5.7,
    ceiled: -5,
    floored: -6,
    rounded: -6
}
*/

console.log(mathOperations(3.14));
/* 
{
    absolute: 3.14,
    ceiled: 4,
    floored: 3,
    rounded: 3
}
*/

console.log(mathOperations(0));
/*
{
    absolute: 0,
    ceiled: 0,
    floored: 0,
    rounded: 0
}
*/