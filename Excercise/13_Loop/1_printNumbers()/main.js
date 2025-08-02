/**
 * Prints numbers from start to end.
 *
 * @param {number} start - The starting number
 * @param {number} end - The ending number
 */
const printNumbers = (start, end) => {
    for(let i = start; i <= end ; i++) {
        console.log(i);
    }
}

// Sample usage
printNumbers(1, 5);
// 1
// 2
// 3
// 4
// 5