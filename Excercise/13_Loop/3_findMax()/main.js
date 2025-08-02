/**
 * Finds the maximum number in an array.
 *
 * @param {Array<number>} arr - The array to find the maximum number in
 * @returns {number} The maximum number in the array
 */
const findMax = (arr) => {
    let max = arr[0];
    for(let i = 0; i <= arr.length ; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Sample usage
console.log(findMax([1, 3, 5, 7, 9])); // 9
console.log(findMax([10, 20, 30, 40, 50])); // 50
console.log(findMax([-5, -2, -1, -3])); // -1