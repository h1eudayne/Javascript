/**
 * Finds the Greatest Common Divisor (GCD) of two numbers using Euclid's algorithm.
 * @param {number} a - First positive integer.
 * @param {number} b - Second positive integer.
 * @returns {number} The GCD of a and b.
 */
const findGCD = (a, b) => {
    if (b > a) {
        // Nếu b lớn hơn a, đổi chỗ a và b
        let temp = a; // Sử dụng biến tạm để giữ giá trị của a
        a = b; // Gán giá trị của b cho a
        b = temp; // Gán giá trị tạm (a ban đầu) cho b
    }

    // Thực hiện vòng lặp để tìm UCLN sử dụng thuật toán Euclid
    while (b != 0) {
        let temp = b; // Lưu giá trị hiện tại của b vào biến tạm
        b = a % b; // Cập nhật b bằng phần dư của a chia cho b
        a = temp; // Cập nhật a bằng giá trị cũ của b
        // Lặp lại quy trình này cho đến khi b bằng 0
    }
    return a;
}

/*
const findGCD = (a, b) => {
    // Lặp lại cho đến khi a và b bằng nhau
    while (a !== b) {
        // Nếu a lớn hơn b, giảm a đi b
        if (a > b) {
            a -= b; // a = a - b
        } else {
            // Ngược lại, nếu b lớn hơn a, giảm b đi a
            b -= a; // b = b - a
        }
        // Quá trình này lặp lại cho đến khi a và b bằng nhau,
        // Lúc này, a hoặc b chính là ước chung lớn nhất của hai số ban đầu.
    }
}
*/

// Sample usage
console.log(findGCD(60, 48)); // 12
console.log(findGCD(12, 15)); // 3
console.log(findGCD(100, 80)); // 20
console.log(findGCD(7, 13)); // 1