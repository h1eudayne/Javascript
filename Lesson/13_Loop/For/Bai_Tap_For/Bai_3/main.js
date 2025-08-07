/**
 * 1. Viết hàm isAscending nhận vào một mảng số và kiểm tra xem mảng đó có phải là dãy số tăng dần không. Trường hợp mảng chỉ có một phần tử hoặc mảng rỗng không được coi là mảng tăng dần.
 * 2. Viết hàm isPrime nhận vào một số nguyên n và trả về true nếu n là số nguyên tố, ngược lại trả về false.
 * 3. Viết hàm sumPrimes nhận vào hai số nguyên start và end, sau đó tính và trả về tổng của tất cả các số nguyên tố trong khoảng từ start đến end.
 */
/**
 * 1. Checks if an array is strictly ascending.
 *
 * @param {Array<number>} arr - The array to check
 * @returns {boolean} True if the array is ascending, false otherwise
 */
const isAscending = (arr) => {
    if(arr.length <= 1) {
        return false;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;

} 

// Sample usage
console.log(isAscending([1, 2, 3, 5])); // true

/**
 * 2. Checks if a number is prime.
 *
 * @param {number} n - The number to check
 * @returns {boolean} True if n is a prime number, false otherwise
 */
const isPrime = (n) => {
    for(let i = 2 ; i <= Math.sqrt(n) ; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

// Sample usage
// console.log(isPrime(2)); // true

/**
 * 3. Sums all prime numbers in a given range.
 *
 * @param {number} start - The start of the range
 * @param {number} end - The end of the range
 * @returns {number} The sum of prime numbers in the range
 */
const sumPrimes = (start, end) => {
    let sum = 0;
    for(let i = start ; i <= end; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Sample usage
// console.log(sumPrimes(10, 20)); // 60