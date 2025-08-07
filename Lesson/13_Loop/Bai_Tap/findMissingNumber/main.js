/**
 * Finds the missing number in an array of consecutive integers.
 * @param {Array<number>} nums - An array of consecutive numbers starting from 1, missing one number.
 * @returns {number} The missing number.
 */
const findMissingNumber = (nums) => {
    let n = nums.length + 1;
    let duDoan = n * (n + 1) / 2;
    let thucTe = 0;
    for(let i = 0 ; i < nums.length; i++) {
        thucTe += nums[i];
    }
    return duDoan - thucTe; 
}

// Sample usage
console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5])); // 6
console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([2, 3, 1, 5])); // 4