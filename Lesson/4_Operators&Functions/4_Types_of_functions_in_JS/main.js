// * 3 loại hàm trong JavaScript?
// - Hàm khai báo là gì?
// + Hàm khai báo (Declaration function) là cách truyền thống để định nghĩa một hàm trong JavaScript. Hàm này có thể được gọi trước khi nó được định nghĩa.

// - Cú pháp:

function tenHam(thamSo) {
  // Khối lệnh
}

// - Ví dụ thực tế:

function tinhTong(a, b) {
  return a + b;
}
console.log(tinhTong(5, 3)); // 8

// - Khuyến nghị: Nên gọi hàm sau khi khai báo giúp code trở nên dễ dàng đọc-hiểu hơn, nhất là khi chúng ta mới học JavaScript.

// - Hàm biểu thức là gì?
// + Hàm biểu thức (Function expression) là một cách để định nghĩa hàm thông qua việc gán hàm cho một biến. Hàm này chỉ có thể được gọi sau khi nó được định nghĩa.

// + Cú pháp:

const tenHam = function (thamSo) {
  // Khối lệnh
};

// + Ví dụ thực tế:

const tinhHieu = function (a, b) {
  return a - b;
};
console.log(tinhHieu(5, 3)); // 2

// - Lưu ý: Nếu gọi hàm trước khi định nghĩa sẽ xảy ra lỗi: Uncaught ReferenceError: Cannot access 'tinhHieu' before initialization.

// - Hàm mũi tên là gì?
// + Hàm mũi tên (Arrow function) là một cú pháp ngắn gọn được giới thiệu trong ES6, dùng để viết hàm biểu thức một cách ngắn gọn hơn. Hàm mũi tên đặc biệt hữu ích khi làm việc với các hàm vô danh và hàm callback.

// + Cú pháp:

const tenHam = (thamSo) => {
  // Khối lệnh
};

// + Ví dụ thực tế:

const tinhTich = (a, b) => {
  return a * b;
};
console.log(tinhTich(5, 3)); // 15

// + Hoặc return luôn sau dấu mũi tên:

const tinhTich1 = (a, b) => a * b;
console.log(tinhTich1(5, 3)); // 15

// + Hoặc rút gọn không cần cặp ngoặc đơn:

const double = (n) => n * 2;
console.log(double(2)); // 4

// - Lưu ý: Nếu gọi hàm trước khi định nghĩa sẽ xảy ra lỗi: Uncaught ReferenceError: Cannot access 'double' before initialization.

// * Khi nào thì sử dụng loại hàm nào?
// - Hàm khai báo (Declaration function): Khi cần sử dụng được hàm trước khi khai báo, hoặc đơn giản muốn dùng cách truyền thống.
// - Hàm biểu thức (Function expression): Khi muốn chỉ gọi được hàm sau khi khai báo, hoặc khi hàm được sử dụng như một giá trị (ví dụ, truyền hàm như một tham số).
// - Hàm mũi tên (Arrow function): Khi cần một cú pháp ngắn gọn hoặc khi làm việc với this trong một ngữ cảnh nhất định (vì hàm mũi tên không có this riêng của nó).
