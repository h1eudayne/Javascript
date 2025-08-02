/**
 * 1. Compresses a string by replacing sequences of the same character with that character followed by the count of repetitions.
 * @param {string} str - The string to be compressed.
 * @return {string} The compressed string.
 */
function compressString(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }
    return compressed;
}

// Sample usage
console.log(compressString("aaabbc")); // a3b2c1
console.log(compressString("aabcccccaaa")); // a2b1c5a3

/**
 * 2. Calculates the average grade from an array of scores and returns the letter grade.
 * @param {number[]} scores - An array of scores.
 * @return {string} The letter grade.
 */
function calculateGrade(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    const average = sum / scores.length;

    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}

// Sample usage
// console.log(calculateGrade([92, 94, 99])); // A
// console.log(calculateGrade([85, 80, 87])); // B

/**
 * 3. Checks if a string is a palindrome, ignoring case.
 * @param {string} str - The string to be checked.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    for (let i = 0, j = str.length - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
           return false;
        }
    }
    return true;
}

// Sample usage
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false

/**
 * 4. Finds the missing number in an array containing all numbers from 1 to n except one.
 * @param {number[]} arr - An array of integers from 1 to n missing one number.
 * @param {number} n - The maximum number in the range.
 * @return {number} The missing number.
 */
function findMissingNumber(arr, n) {
    const expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let i = 0; i < arr.length; i++) {
       actualSum += arr[i];
    }

    return expectedSum - actualSum;
}

// Sample usage
// console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); // 3
// console.log(findMissingNumber([3, 7, 1, 2, 8, 4, 5], 8)); // 6
// console.log(findMissingNumber([1, 2, 3, 4], 4)); // 0

/**
 * 5. Finds the maximum number of consecutive 1s in a binary array.
 * @param {number[]} nums - A binary array consisting of only 0s and 1s.
 * @return {number} The maximum number of consecutive 1s.
 */
function maxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            // Cập nhật maxCount một cách thủ công
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        } else {
            currentCount = 0;
        }
    }

    return maxCount;
}

// console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3
// console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])); // 2