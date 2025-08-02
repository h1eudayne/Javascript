// * includes() là gì?

// - includes() là một phương thức sử dụng để kiểm tra xem một chuỗi con có tồn tại trong chuỗi gốc hay không.

// - Cú pháp:
// + let bool = string.includes(searchString, position);

// - Giải thích:
// + searchString: Chuỗi con cần tìm trong string.
// + position (không bắt buộc, mặc định là 0): Vị trí bắt đầu tìm trong string.

// - Trả về:
// + true nếu searchString xuất hiện trong string từ vị trí position trở đi.
// + false nếu không tìm thấy.

// - Ví dụ:

const str = "Hello, world!";

console.log(str.includes("world")); // true
console.log(str.includes("World")); // false
console.log(str.includes("world", 8)); // false

// - includes() giúp kiểm tra nhanh chóng sự tồn tại của một chuỗi con trong chuỗi chính mà không cần phải viết nhiều code phức tạp.

// - Bài toán và ví dụ:
// + Kiểm tra xem một email có chứa ký tự ‘@’ không.

const email = "example@domain.com";
console.log(email.includes("@")); // true


// +  Kiểm tra xem một câu có chứa từ khóa “JavaScript” không.

const sentence = "I love JavaScript programming.";
console.log(sentence.includes("JavaScript")); // true

// --------------------------------------------------------------------------------------------------------------------------------

// * indexOf() là gì?

// - indexOf() là một phương thức được sử dụng để tìm vị trí (chỉ mục) đầu tiên của một chuỗi con trong chuỗi gốc. Phương thức này trả về vị trí của chuỗi con hoặc -1 nếu không tìm thấy.

// - Cú pháp:
// + let index = string.indexOf(searchValue, fromIndex);

// - Giải thích:
// + searchValue: Chuỗi con cần tìm trong string.
// + fromIndex (không bắt buộc, mặc định là 0): Vị trí bắt đầu tìm trong string.

// - Trả về:
// +  Vị trí đầu tiên (chỉ mục mảng) của searchValue trong string, tính từ fromIndex.
// + -1 nếu không tìm thấy.

// - Ví dụ:

const str1 = "Hello, world!";

console.log(str1.indexOf("world")); // 7
console.log(str1.indexOf("World")); // -1
console.log(str1.indexOf("o", 5)); // 8

// - indexOf() giúp xác định vị trí của một chuỗi con trong chuỗi chính, hữu ích khi cần biết vị trí bắt đầu của chuỗi con.

// - Bài toán và ví dụ:

// + Tìm vị trí đầu tiên của chữ “a” trong chuỗi.

const str2 = "banana";

console.log(str2.indexOf("a")); // 1


// + Kiểm tra xem một từ có xuất hiện trong câu không và in ra vị trí của nó.

const sentence3 = "The quick brown fox jumps over the lazy dog.";

console.log(sentence3.indexOf("fox")); // 16

// --------------------------------------------------------------------------------------------------------------------------------

// * lastIndexOf() là gì?

// - lastIndexOf() là một phương thức được sử dụng để tìm vị trí xuất hiện cuối cùng của một chuỗi con trong chuỗi gốc.

// - Cú pháp:
// + let index = string.lastIndexOf(searchValue, fromIndex);

// - Giải thích:
// + searchValue: Chuỗi con cần tìm trong string.
// + fromIndex (không bắt buộc, mặc định là string.length - 1): Vị trí bắt đầu tìm ngược trong string.

// - Trả về:
// + Vị trí cuối cùng (chỉ mục mảng) của searchValue trong string, tính từ fromIndex trở về trước.
// + -1 nếu không tìm thấy.

// - Ví dụ:

const str4 = "Hello, world! Hello again!";

console.log(str4.lastIndexOf("Hello")); // 14
console.log(str4.lastIndexOf("World")); // -1
console.log(str4.lastIndexOf("o", 5)); // 4

// - lastIndexOf() giúp xác định vị trí cuối cùng của một chuỗi con trong chuỗi chính, hữu ích khi cần biết vị trí xuất hiện cuối cùng của chuỗi con.

// - Bài toán và ví dụ:

//  + Tìm vị trí xuất hiện cuối cùng của chữ “a” trong chuỗi.

const str5 = "banana";

console.log(str5.lastIndexOf("a")); // 5


// + Tìm vị trí của một từ trong câu.

const sentence6 = "The quick brown fox jumps over the lazy dog. The dog is lazy.";

console.log(sentence6.lastIndexOf("dog"));  // 49

// --------------------------------------------------------------------------------------------------------------------------------

// * startsWith() là gì?

// - startsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có bắt đầu bằng chuỗi hay không.

// - Cú pháp:
// + let bool = string.startsWith(searchString, position);

// - Giải thích:
// + searchString: Chuỗi con cần kiểm tra xem string có bắt đầu bằng nó không.
// + position (không bắt buộc, mặc định là 0): Vị trí bắt đầu kiểm tra trong string.

// - Trả về:
// + true nếu string bắt đầu bằng searchString tại position.
// +  false nếu không.

// - Ví dụ:

const str7 = "Hello, world!";

console.log(str7.startsWith("Hello")); // true

console.log(str7.startsWith("world")); // false

console.log(str7.startsWith("world", 7)); // true


// - startsWith() giúp kiểm tra nhanh chóng và hiệu quả xem một chuỗi có bắt đầu bằng một chuỗi con cụ thể không.

// - Bài toán và ví dụ:

// Kiểm tra xem URL có bắt đầu bằng “https://” không.

const url = "https://example.com";

console.log(url.startsWith("https://")); // true


// - Kiểm tra xem tên tập tin có bắt đầu bằng “report_” không.

const fileName1 = "report_2023.pdf";

console.log(fileName1.startsWith("report_")); // true

// --------------------------------------------------------------------------------------------------------------------------------

// * endsWith() là gì?

// - endsWith() là một phương thức được sử dụng để kiểm tra xem chuỗi có kết thúc bằng chuỗi hay không.

// - Cú pháp:
// + let bool = string.endsWith(searchString, length);

// - Giải thích:
// + searchString: Chuỗi con cần kiểm tra xem string có kết thúc bằng nó không.
// + length (không bắt buộc, mặc định là string.length): Độ dài tối đa của string khi kiểm tra.

// - Trả về:
// + true nếu string kết thúc bằng searchString trong phạm vi length.
// + false nếu không.

// - Ví dụ:

const str8 = "Hello, world!";

console.log(str8.endsWith("world!")); // true
console.log(str8.endsWith("world")); // false
console.log(str8.endsWith("Hello", 5)); // true

// - endsWith() giúp kiểm tra nhanh chóng và hiệu quả xem một chuỗi có kết thúc bằng một chuỗi con cụ thể không.

// - Bài toán và ví dụ:
// + Kiểm tra xem một tên miền có kết thúc bằng “.com” không.

const domain = "example.com";

console.log(domain.endsWith(".com")); // true


// - Kiểm tra xem một file có kết thúc bằng “.jpg” không.

const fileName = "picture.jpg";

console.log(fileName.endsWith(".jpg")); // true

// --------------------------------------------------------------------------------------------------------------------------------

// * Các sai lầm thường gặp

// - Không phân biệt chữ hoa và chữ thường

// - Sai lầm: includes(), indexOf(), startsWith(), và endsWith() đều phân biệt chữ hoa và chữ thường, dẫn đến kết quả không mong muốn.

const str9 = "Hello, world!";

console.log(str9.includes("World")); // false

// - Cách giải quyết: Sử dụng phương thức toLowerCase() hoặc toUpperCase() để chuẩn hóa chuỗi trước khi kiểm tra.

const str10 = "Hello, world!".toLowerCase();

console.log(str10.includes("World".toLowerCase())); // true

// - Không kiểm tra giá trị -1 từ indexOf()

// - Sai lầm: Không kiểm tra giá trị trả về từ indexOf(), dẫn đến lỗi logic trong chương trình.

// - Cách giải quyết: Luôn kiểm tra giá trị trả về từ indexOf().