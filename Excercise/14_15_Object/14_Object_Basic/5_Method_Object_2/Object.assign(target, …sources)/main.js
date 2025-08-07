// Định nghĩa đối tượng đích và đối tượng nguồn
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// Sử dụng Object.assign để sao chép thuộc tính từ source sang target
const returnedTarget = Object.assign(target, source);

// Hiển thị kết quả
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
