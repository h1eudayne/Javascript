/**
 * 1. Viết hàm listEvenNumbers nhận vào hai tham số là start và end, sau đó in ra tất cả các số chẵn từ start đến end sử dụng vòng lặp for.
 * 2. Viết hàm sumOddNumbers nhận vào một mảng số và trả về tổng của tất cả các số lẻ trong mảng đó sử dụng vòng lặp for.
 * 3. Viết hàm findMin nhận vào một mảng số và trả về số nhỏ nhất trong mảng đó sử dụng vòng lặp for.
 */

/**
 * 1. Lists all even numbers in a given range.
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 */

const listEvenNumbers = (start, end) => {
    for(let i = start; i <= end ; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

// Sample usage
listEvenNumbers(1, 10);
// 2
// 4
// 6
// 8
// 10

/**
 * 2. Calculates the sum of all odd numbers in an array.
 *
 * @param {Array<number>} numbers - The array of numbers
 * @returns {number} The sum of odd numbers
 */
const sumOddNumbers = (numbers) => {
    let sum = 0;
    for (let i = 0 ; i < numbers.length ; i++) {
        if(numbers[i] % 2 !== 0) {
            sum += numbers[i];
    } 
    }
    return sum;
}
// Sample usage
// console.log(sumOddNumbers([1, 2, 3, 4, 5])); // 9

/**
 * 3. Finds the minimum number in an array.
 *
 * @param {Array<number>} arr - The array to find the minimum number in
 * @returns {number} The minimum number in the array
 */
const findMin = (numbers) => {
    let min = numbers[0];
    for(let i = 0 ; i < numbers.length; i++) {
        if(numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

// Sample usage
// console.log(findMin([5, 2, 8, 1, 4])); // 1