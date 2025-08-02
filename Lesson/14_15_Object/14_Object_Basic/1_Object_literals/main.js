// * Object literals là gì?
// - Object literals trong JavaScript là một cách để tạo ra một object. Object này chứa một tập hợp các cặp key-value, nơi key là một chuỗi (hoặc Symbol) và value có thể là bất kỳ giá trị nào trong JavaScript.

// - Cú pháp sử dụng:

// const objectName = {
//   key1: value1,
//   key2: value2,
// thêm nhiều cặp key-value khác ở đây
// };

// - Ví dụ thực tế:

// Lưu trữ thông tin người dùng
const user = {
  username: "user123",
  email: "user@example.com",
  signUpDate: "2021-01-01",
};

// Định nghĩa cấu hình cho một ứng dụng
const config = {
  apiUrl: "https://api.example.com",
  apiKey: "abc123",
  timeout: 5000,
};

// - Object Literals giúp tổ chức và lưu trữ dữ liệu một cách dễ dàng trong một cấu trúc. Nó rất hữu ích trong việc quản lý và truy cập dữ liệu một cách tổ chức.

// - Có một số cách tạo object khác như: hàm constructor, Object.create(); chúng ta sẽ học nó ở các bài sau bạn nhé.

// * Làm việc với Object (cơ bản)
// - Thêm một cặp key-value mới
// + Khi bạn đã có một object trong JavaScript, bạn có thể muốn thêm mới các cặp key-value để mở rộng thông tin hoặc cấu hình của object đó. Có hai phương pháp chính để làm điều này: sử dụng dấu chấm (.) và sử dụng dấu ngoặc vuông ([]).

// + Ví dụ:

const car = {
  make: "Toyota",
  model: "Camry",
};
// Thêm cặp key-value mới
car.year = 2021; // Sử dụng dấu chấm
car["color"] = "Gray"; // Sử dụng dấu ngoặc vuông
console.log(`Năm sản xuất ${car.year}`); // Năm sản xuất 2021
console.log(`Màu sắc: ${car.color}`); // Màu sắc: Gray

// + Trong cả hai trường hợp, object car được mở rộng thêm các thuộc tính mới mà không làm mất giá trị cũ của nó. Bạn có thể chọn phương pháp phù hợp với nhu cầu cụ thể của mình để làm cho code dễ đọc và dễ bảo trì.

// - Truy cập và cập nhật giá trị
// + Sau khi đã tạo một object, bạn không chỉ có thể thêm mới các thuộc tính mà còn có thể truy cập và cập nhật giá trị của các thuộc tính sẵn có. Điều này giúp bạn linh hoạt quản lý và điều chỉnh dữ liệu trong object theo nhu cầu.

// + Ví dụ:

const person = {
  name: "Alice",
  age: 25,
};
console.log(`Tuổi: ${person.age}`); // Truy cập
// Tuổi: 25
person.age = 26; // Cập nhật
console.log(`Tuổi: ${person.age}`); // Truy cập
// Tuổi: 26

// + Sau khi cập nhật, khi truy cập thuộc tính age của object person lại, bạn sẽ thấy giá trị mới là 26 thay vì 25 như ban đầu.

// - Xóa một cặp key-value
// + Việc quản lý dữ liệu trong object không chỉ dừng lại ở việc thêm và cập nhật. Đôi khi, bạn cũng cần phải xóa bỏ các thuộc tính không cần thiết. Để xóa một cặp key-value khỏi một object, bạn sử dụng từ khóa delete.

// + Ví dụ:

const employee = {
  name: "Bob",
  position: "Manager",
};
// Trước khi xóa
console.log(`Vị trí công việc: ${employee.position}`);
// Xóa key "position" khỏi object
delete employee.position; // Vị trí công việc: Manager
// Kiểm tra lại object, "position" đã bị xóa
console.log(employee); // {name: "Bob"}

// + Việc xóa thuộc tính khỏi object giúp bạn quản lý dữ liệu một cách linh hoạt hơn, cho phép loại bỏ các thông tin không cần thiết, từ đó giữ cho dữ liệu của bạn được gọn gàng.

// - Sử dụng Object destructuring
// + Object destructuring là một kỹ thuật trong JavaScript giúp bạn “phân rã” object, cho phép truy cập nhanh chóng và trực tiếp vào một hoặc nhiều thuộc tính của object mà không cần phải truy cập từng thuộc tính một. Điều này làm cho code của bạn trở nên sạch sẽ và dễ đọc hơn, đặc biệt khi bạn cần sử dụng nhiều thuộc tính từ cùng một object.

// + Ví dụ:

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};
const { title, author } = book;
console.log(`Tiêu đề sách: ${title}`); // Tiêu đề sách: The Great Gatsby
console.log(`Tác giả: ${author}`); // Tác giả: F. Scott Fitzgerald

// + Sử dụng object destructuring giúp làm giảm số lượng code khi truy cập các thuộc tính của object, từ đó code trở nên rõ ràng và dễ đọc hơn.

// - Duyệt qua các cặp key-value
// + Có thể bạn sẽ muốn xem hoặc xử lý tất cả các cặp key-value mà object đó chứa. Để thực hiện điều này, bạn có thể sử dụng vòng lặp for...in, một cấu trúc lặp cung cấp một cách dễ dàng để duyệt qua tất cả các keys của một object.

// + Ví dụ:

const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
// Duyệt qua object và in ra mỗi cặp key-value
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
/*
    name: John
    age: 30
    isEmployed: true
*/

// + Vòng lặp for...in là một công cụ mạnh mẽ để duyệt qua các object, giúp bạn có thể xử lý dữ liệu một cách linh hoạt.

// * Các sai lầm thường gặp
// - Không kiểm tra tồn tại của key
// + Không kiểm tra xem một key có tồn tại trong object trước khi truy cập giá trị có thể dẫn đến lỗi.

// + Cách giải quyết: Kiểm tra sự tồn tại của key trước khi truy cập.

if ("age" in person) {
  console.log(`Tuổi: ${person.age}`);
}

// * Sử dụng từ khóa dành riêng làm key
// - Sử dụng từ khóa dành riêng của JavaScript (như function, var) làm key trong object literals có thể gây ra lỗi hoặc kết quả không mong muốn.
// - Cách giải quyết: Tránh sử dụng các từ khóa dành riêng của ngôn ngữ và chọn các tên key mô tả rõ nghĩa.
