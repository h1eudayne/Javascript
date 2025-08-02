/**
 * 1. Counts elements in an array greater than a specified value.
 * @param {number[]} arr - Array to search.
 * @param {number} value - Value to compare against.
 * @return {number} Count of elements greater than value.
 */
const countGreaterThan = (arr,value) => {
    let count = 0;

    for(let i = 0; i < arr.length ; i++) {
        if(arr[i] > value) {
            count++;
        }
    }
    return count;
}

// Sample usage
console.log(countGreaterThan([1, 5, 7, 2, 3], 3)); // 2
console.log(countGreaterThan([2, 3, 1, -6, 8], 5)); // 1
console.log(countGreaterThan([], 5)); // 0

/**
 * 2. Calculates the alternating sum of an array, adding even-indexed elements and subtracting odd-indexed ones.
 * @param {number[]} arr - An array of integers.
 * @return {number} The alternating sum of the array.
 */
const alternateSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 == 0) {
            sum += arr[i];
        }
        else {
            sum -= arr[i]; 
        }
    }
    return sum;
}

// Sample usage
// console.log(alternateSum([10, 5, 6, 3])); // 8 (10 - 5 + 6 - 3)
// console.log(alternateSum([1, 2, 3, 4, 5])); // 3 (1 - 2 + 3 - 4 + 5)

/**
 * 3. Calculates the sum of the squares of each element in an array.
 * @param {number[]} arr - An array of integers.
 * @return {number} The sum of squares of the array elements.
 */
const sumOfSquares = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i],2);
    }
    return sum;
}

// Sample usage
// console.log(sumOfSquares([1, 2, 3])); // 14 (1^2 + 2^2 + 3^2 = 14)
// console.log(sumOfSquares([4, 5, 6])); // 77 (4^2 + 5^2 + 6^2 = 77)

/**
 * 4. Filters even numbers from an array and calculates their sum.
 * @param {number[]} arr - An array of integers.
 * @return {number} Sum of the even numbers.
 */
const filterEvensAndSum = (arr) => {
    let sum = 0;
    let i = 0;
    let count = 0;
    while(i < arr.length) {
        if(arr[i] % 2 == 0) {
            sum += arr[i];
        }
        i++;
    }
    return sum;
}

// Sample usage
// console.log(filterEvensAndSum([1, 2, 3, 4, 5, 6])); // 12 (2 + 4 + 6 = 12)
// console.log(filterEvensAndSum([12, 14, 15, 19, 20, 100])); // 146 (12 + 14 + 20 + 100 = 146)

/**
 * 5. Finds the longest string in an array.
 * @param {string[]} arr - An array of strings.
 * @return {string} The longest string in the array. If there are multiple strings of the same maximum length, the first one is returned.
 */
const findLongestWord = (arr) => {
    let longest = "";
    for(let i = 0 ; i < arr.length ;i++) {
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest;
}

// Sample usage
// console.log(findLongestWord(["apple", "banana", "cherry", "date"])); // banana
// console.log(findLongestWord(["hello", "world", "this", "is", "great"])); // hello