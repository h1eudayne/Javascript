// * Xóa khoảng trắng thừa là gì?

// - Xóa khoảng trắng thừa là việc loại bỏ các ký tự khoảng trắng không mong muốn ở đầu và cuối chuỗi ký tự.
// + trim(): Loại bỏ khoảng trắng ở cả hai đầu chuỗi.
// + trimStart(): Loại bỏ khoảng trắng ở đầu chuỗi.
// + trimEnd(): Loại bỏ khoảng trắng ở cuối chuỗi.

// * Tại sao cần sử dụng xử lý khoảng trắng

// - Khi làm việc với dữ liệu văn bản, việc loại bỏ khoảng trắng không mong muốn giúp đảm bảo dữ liệu được xử lý đúng cách, tránh lỗi logic trong chương trình.

// - Ưu điểm khi dùng:
// + Giúp làm sạch dữ liệu, tránh lỗi khi so sánh hoặc lưu trữ chuỗi.

// - Bài toán 1:

// + Loại bỏ khoảng trắng trong tên người dùng nhập vào để lưu trữ chính xác.
// + Ví dụ:

let userName = "  John Doe  ";
let cleanedName = userName.trim();

console.log(cleanedName); // "John Doe";

// * Bài toán và ví dụ

// - Loại bỏ khoảng trắng ở cả hai đầu của chuỗi:

let str1 = "  Hello World  ";
let result1 = str1.trim();

console.log(result1); // "Hello World"

// - Loại bỏ khoảng trắng ở đầu chuỗi:

let str2 = "  Hello World  ";
let result2 = str2.trimStart();

console.log(result2); // "Hello World  "

// - Loại bỏ khoảng trắng ở cuối chuỗi:

let str3 = "  Hello World  ";
let result3 = str3.trimEnd();

console.log(result3); // "  Hello World"

// * Các sai lầm thường gặp

// - Quên loại bỏ khoảng trắng trước khi so sánh chuỗi
// + Khi so sánh hai chuỗi mà không loại bỏ khoảng trắng, kết quả so sánh có thể sai.

// - Cách giải quyết tốt: Dùng trim() trước khi so sánh các chuỗi do người dùng nhập vào khi cần thiết.

let str11 = "Hello";
let str21 = " Hello ";

console.log(str11 === str21); // false
console.log(str11 === str21.trim()); // true

// - Quên loại bỏ khoảng trắng khi lưu dữ liệu
// + Lưu trữ chuỗi có khoảng trắng không mong muốn có thể dẫn đến dữ liệu không nhất quán.

// - Cách giải quyết tốt: Dùng trim() trước khi lưu dữ liệu khi không thực sự cần lưu cả các khoảng trắng trước và cuối chuỗi.

let userInput = "  Jane Doe  ";
let cleanedInput = userInput.trim();
// Lưu cleanedInput thay vì userInput