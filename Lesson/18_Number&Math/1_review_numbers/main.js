// NaN, isNaN()
// parseInt()
// Number.prototype.toFixed()

// * Cách viết rút gọn các số lớn, nhỏ có nhiều số 0
console.log(500000000); // 500000000 
console.log(5 * 10 ** 8); // 500000000
console.log(5e8); // 500000000

console.log(3e6);

// ----------------------------------------------------------------------

// * NaN - Not a Number

// Lưu ý:
console.log(typeof NaN); // number

// NaN khi tham gia tính toán sẽ trả về NaN
console.log(NaN + 2); // NaN 

// NaN so sánh vs bất kì giá trị nào đều trả về false kể cả NaN
console.log(NaN === NaN); // false
// Muốn so sánh NaN thì phải dùng hàm isNaN()
console.log(isNaN(NaN)); // true

// Nếu muốn đưa vào tham gia tính toán phải có điều kiện (typeof "giá_trị_truyền" === "number" && !isNaN("giá_trị_truyền") )

// ----------------------------------------------------------------------

// * parseInt()

console.log(parseInt(100.5, 10)); // 100
// giá trị thứ 2 truyền vào là hệ số muốn trả về vd trên là hệ số 10

// ----------------------------------------------------------------------

// * Number.prototype.toFixed()

// - Dùng để rút gọn phần thập phân

let num = 123.45678;

console.log(num.toFixed(2)); // 123.46

// - Và nó trả về 1 chuỗi

console.log( typeof num.toFixed(2)); // String

// - Có thể dùng ép kiểu để đưa về kiểu số

console.log( typeof +num.toFixed(2)); // String

