// Truy cập chuỗi
let email = "nguyenvana@gmail.com";

// * Truy cập độ dài chuỗi
// - string.length, string['length']

console.log(email.length); // 20

console.log(email['length']); // 20

// * Truy cập từng kí tự ở trong chuỗi
// - string.[index], string.charAt(index), string.at(index);

// + string.[index]
console.log(email[0]); // n
console.log(email[-1]); // undefined
// string.[index] nếu truyền vào 1 chỉ mục không tồn tại thì sẽ trả về undefined
// Thường sử dụng

// + string.charAt()
console.log(email.charAt(0)); // n
console.log(email.charAt(-1)); // chuỗi rỗng
// string.charAt() nếu truyền vào 1 chỉ mục không tồn tại thì sẽ trả về chuỗi rỗng

console.log(email.charAt("length")); // n
// charAt() chỉ nhận vị trí(index) nên sẽ cố ép sang kiểu số.
// Nó sử dụng zero-based nghĩa là khi truyền các kiểu dữ liệu khác vào thì sẽ ép sang kiểu số , nếu truyền 1 giá trị khác ngoài số nếu trả về NAN thì charAt sẽ nhận về số 0

// + string.at(index)
// Khá giống charAt() nhưng có hỗ trợ số âm.
// Số âm sẽ bắt đầu từ cuối chuỗi lên đầu

// Sử dụng charAt() và at() khi  chỉ muốn hỗ trợ truyền index, và luôn trả về kiểu chuỗi thì sẽ dùng 2 thằng này




