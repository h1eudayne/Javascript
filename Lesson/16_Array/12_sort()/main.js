// * Phương thức sort()
// + Phương thức sort() được dùng để sắp xếp các phần tử của một mảng theo một thứ tự xác định. Mặc định, các phần tử được sắp xếp theo thứ tự từ điển (Unicode code points).
// + Chữ hoa sẽ được ưu tiên hơn chữ thường (trong mặc định)

// - Cú pháp:
// array.sort(compareFunction(a, b) {
//   // return a negative, zero, or positive value
// });

// - Tham số:
// + a: Phần tử đầu tiên để so sánh.
// + b: Phần tử thứ hai để so sánh.

// - Giá trị trả về:
// + Trả về số âm để a được sắp xếp trước b.
// + Trả về số dương để a được sắp xếp sau b.
// + Trả về 0 để giữ nguyên vị trí của a và b .

// - compareFunction là một tham số không bắt buộc, bạn có thể cung cấp cho phương thức sort() để xác định cách các phần tử trong mảng được sắp xếp. Nếu không cung cấp compareFunction, mảng sẽ được sắp xếp dựa trên chuyển đổi các phần tử thành chuỗi và so sánh theo từng ký tự, từ trái sang phải.

// - Đây là cách mà phương thức này hoạt động (khi không cung cấp compareFunction):
// + Chuyển đổi các phần tử thành chuỗi: Mặc định, sort() sẽ chuyển đổi tất cả các phần tử của mảng thành chuỗi để so sánh.
// + So sánh chuỗi: Sau khi chuyển đổi, các chuỗi sẽ được so sánh theo từng ký tự, từ trái sang phải.
// + Sắp xếp mảng: Dựa trên kết quả của việc so sánh chuỗi, mảng sẽ được sắp xếp lại.

// Ví dụ 1: Sắp xếp chuỗi

let words = ["cherry", "banana",  "apple"];

words.sort();

console.log(words); //(3) ["apple", "banana", "cherry"]


// Ví dụ 2: Sắp xếp số

let numbers1 = [21, 2, 10, 3];

numbers1.sort();

console.log(numbers1); //(4) [10, 2, 21, 3]


// - Khi không cung cấp hàm so sánh, JavaScript chuyển đổi tất cả các phần tử thành chuỗi và sắp xếp chúng theo thứ tự từ điển của chuỗi Unicode, điều này có thể dẫn đến những kết quả không mong muốn khi sắp xếp các số.

// - Ví dụ 3: Sử dụng compareFunction

// + compareFunction cung cấp sự linh hoạt để sắp xếp mảng theo nhiều tiêu chí khác nhau, không chỉ giới hạn ở bảng chữ cái và không phụ thuộc vào loại dữ liệu.

let numbers2 = [21, 2, 10, 3];

numbers2.sort((a, b) => a - b);

console.log(numbers2); //(4) [2, 3, 10, 21]


// - Phương thức sort() giúp dễ dàng sắp xếp dữ liệu, thường được sử dụng trong các tác vụ liên quan đến việc tổ chức, thống kê và hiển thị dữ liệu theo một trật tự nhất định.

// * Các cách làm việc với sort()

// - Sắp xếp sản phẩm theo tên

let products = ["Orange", "apple", "Banana"];

products.sort((a, b) => a.localeCompare(b));

console.log(products); // (3) ["apple", "Banana", "Orange"]

// Dùng localeCompare() để sắp xếp chuỗi theo thứ tự từ điển chuẩn của ngôn ngữ.

// - Sắp xếp các số từ nhỏ đến lớn

let numbers3 = [10, 5, 40, 25, 1000, 1];

numbers3.sort((a, b) => a - b);

console.log(numbers3); //(6) [1, 5, 10, 25, 40, 1000]


// - Sắp xếp danh sách sinh viên theo tên

let students = [
  { name: "John", score: 90 },
  { name: "Bob", score: 78 },
  { name: "Alice", score: 82 }
];

students.sort((a, b) => a.name.localeCompare(b.name));

console.log(students); // (3) [Object, Object, Object]


// - Sắp xếp danh sách sinh viên theo điểm số

let students1 = [
  { name: "John", score: 90 },
  { name: "Bob", score: 78 },
  { name: "Alice", score: 82 }
];
students1.sort((a, b) => b.score - a.score);

console.log(students1); // (3) [Object, Object, Object]


// * Các sai lầm thường gặp

// - Không cung cấp hàm so sánh khi cần thiết
// + Không sử dụng hàm so sánh cho các kiểu dữ liệu không phải chuỗi, dẫn đến kết quả không chính xác.
// + Cách giải quyết: Luôn cung cấp hàm so sánh phù hợp với kiểu dữ liệu của các phần tử trong mảng.

// - Sử dụng sort() cho mảng có kiểu phức tạp
// + “Tưởng” rằng sort() có thể xử lý mọi kiểu dữ liệu mà không cần hàm so sánh phức tạp.

// - Cách giải quyết: Phát triển hàm so sánh phức tạp và thử nghiệm kỹ càng để đảm bảo độ chính xác khi sắp xếp các kiểu phức tạp hơn như đối tượng hoặc mảng của mảng.

// - Quên rằng sort() thay đổi mảng ban đầu
// + Phương thức sort() thực sự sắp xếp và thay đổi mảng gốc, không tạo ra một bản sao mới.

// - Cách giải quyết: Nếu muốn giữ nguyên mảng gốc, hãy tạo bản sao của mảng trước khi sắp xếp.