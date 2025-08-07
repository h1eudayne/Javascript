/**
 * 1. Viết hàm countPositiveNumbers nhận vào một mảng số và trả về số lượng số dương trong mảng đó.
 * 2. Viết hàm sumArray nhận vào một mảng số và trả về tổng của tất cả các số trong mảng đó.
 * 3. Viết hàm calculateAverage nhận vào một mảng số và trả về trung bình cộng của các số trong mảng đó.
 */
/**
 * 1. Counts the number of positive numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The count of positive numbers
 */

const countPositiveNumbers = (numbers) => {
    let count = 0;
    for(let i = 0 ; i < numbers.length ; i++) {
        if(numbers[i] > 0) {
            count++ ;
        }
    }
    return count;
}

// Sample usage
console.log(countPositiveNumbers([-1, 2, 3, -4, 5])); // 3

/**
 * 2. Calculates the sum of all numbers in an array.
 *
 * @param {Array<number>} arr - The array of numbers
 * @returns {number} The sum of the numbers
 */

const sumArray = (numbers) => {
    let sum = 0;
    for(let i = 0 ; i < numbers.length ; i++) {
        sum += numbers[i];
    }
    return sum;
}
// Sample usage
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

/**
 * 3. Calculates the average of numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The average of the numbers
 */
const calculateAverage = (numbers) => {
    let average = 0;
    for(let i = 0 ; i < numbers.length ; i++) {
        average += numbers[i];
    }
    return numbers.length > 0 ? average / numbers.length : 0;
}
 
// Sample usage
// console.log(calculateAverage([10, 20, 30, 40, 50])); // 30