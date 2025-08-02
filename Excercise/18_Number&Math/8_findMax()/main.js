/** 
 * Function to find the maximum value in an array.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The maximum value in the array or -Infinity if the array is empty.
 */
function findMax(arr) {
    let max = -Infinity;

    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Sample usage
console.log(findMax([1, 2, 3, 4, 5])); // 5
console.log(findMax([-10, -20, -30])); // -10
console.log(findMax([10])); // 10
console.log(findMax([])); // -Infinity