// * toLowerCase() là gì?

// - toLowerCase() là một phương thức được sử dụng để chuyển đổi tất cả các ký tự trong chuỗi thành chữ thường.

// - Cú pháp:
// + let newLowerCaseStr = str.toLowerCase();

// Ví dụ:

let str3 = "HELLO WORLD";
let lowerStr = str3.toLowerCase();
console.log(lowerStr); // "hello world"

// * toUpperCase() là gì?

// - toUpperCase() là một phương thức được sử dụng để chuyển đổi tất cả các ký tự trong chuỗi thành chữ hoa.

// - Cú pháp:
// + let newUpperCaseStr = str.toUpperCase();

// - Ví dụ:

let str = "hello world";
let upperStr = str.toUpperCase();
console.log(upperStr); // "HELLO WORLD"

// * Tại sao cần sử dụng chuyển đổi kiểu chữ?

// - Chuyển đổi kiểu chữ hữu ích khi bạn cần chuẩn hóa dữ liệu đầu vào hoặc so sánh chuỗi mà không phân biệt chữ hoa và chữ thường.

// - Ưu điểm khi dùng:
// +  Dễ dàng so sánh chuỗi không phân biệt chữ hoa và chữ thường.
// + Chuẩn hóa dữ liệu đầu vào từ người dùng.

// - Bài toán và ví dụ:
// + So sánh hai chuỗi không phân biệt chữ hoa và chữ thường.

let str1 = "Hello";
let str2 = "hello";

if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Chuỗi giống nhau");
} else {
  console.log("Chuỗi khác nhau");
} // Chuỗi giống nhau

// + Chuẩn hóa dữ liệu đầu vào từ người dùng.

let userInput = "NguyenVanA@Gmail.com";
let normalizedInput = userInput.toLowerCase();

console.log(normalizedInput); //nguyenvana@gmail.com
