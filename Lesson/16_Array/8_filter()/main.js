// * Phương thức filter

// - Phương thức filter là gì?
// + Phương thức filter() tạo một mảng mới chứa tất cả các phần tử thỏa mãn điều kiện. Phương thức này không thay đổi mảng gốc mà chỉ trả về một mảng mới.

// - Cú pháp:
// let newArray = array.filter(callbackFunction, thisValue);
// + callbackFunction: Hàm kiểm tra được gọi cho mỗi phần tử trong mảng.
    // element: Phần tử hiện tại đang được xử lý.
    // index (tùy chọn): Chỉ mục của phần tử hiện tại.
    // array (tùy chọn): Mảng đang được sử dụng.
// + thisValue (tùy chọn): Giá trị để sử dụng làm this khi thực hiện callbackFunction.

// - Ví dụ:
let numbers = [1, 2, 3, 4, 5, 6];
// Lọc tất cả các phần tử chẵn.
let result = numbers.filter(function (item) {
    return item % 2 === 0;
});
console.log(result); //(3) [2, 4, 6]
// Phương thức filter() được sử dụng khi cần lọc các phần tử của mảng theo điều kiện nhất định. Sử dụng phương thức này giúp giảm số lượng code cần thiết (so với dùng vòng lặp thuần túy) để xử lý các mảng, làm cho code gọn gàng và dễ đọc hơn.


// * Các cách làm việc với filter()
// - Lọc số nguyên dương

let numbers = [-2, 5, 8, -10, 0, 20];
let result = numbers.filter(n => n > 0);

console.log(result); //(3) [5, 8, 20]

// - Lọc - lấy ra các phần tử không trùng lặp
let items = [
    "apple",  // 0
    "banana", // 1
    "apple",  // 2
    "orange", // 3
    "banana", // 4
    "orange"  // 5
];
let result = items.filter((item, index, array) => {
    return array.indexOf(item) === index;
    // lần 1 : apple - 0
    // lần 1 :             0   ===   0 => true
    // sẽ đưa apple vào mảng ["apple"]
    // lần 2 : banana tương tự
    // lần 3 : apple - 2
    // lần 3 :             0   ===   2 => false
    // các lần sau tương tự
});
console.log(result); // (3) ["apple", "banana", "orange"]


// - Lọc ra các đối tượng có tuổi từ 18 trở lên
// + Bạn có thể sử dụng filter() để lọc các đối tượng trong mảng dựa vào thuộc tính của chúng.

let people = [
    {name: "John", age: 23},
    {name: "Jane", age: 15},
    {name: "Jim", age: 30}
];
let result = people.filter(person => person.age >= 18);
console.log(result); //(2) [Object, Object]

// - Lọc ra các sản phẩm còn hàng và giá từ 800 trở xuống
// + Bạn có thể kết hợp nhiều điều kiện trong một hàm filter để làm phức tạp các điều kiện lọc.

let products = [
    {name: "laptop", price: 1000, stock: 4},
    {name: "phone", price: 500, stock: 10},
    {name: "tablet", price: 700, stock: 0}
];
let result = products.filter(p => p.price <= 800 && p.stock > 0);
console.log(result); //(1) [Object]


// * Các sai lầm thường gặp
// - Sử dụng filter không có return
// + Sai lầm phổ biến khi sử dụng filter là quên return trong hàm callback. Nếu không có return, mảng mới sẽ trống vì không có phần tử nào được “chọn”.

// - Cách giải quyết:
// +  Đảm bảo rằng hàm callback của bạn có lệnh return đúng giá trị truthy cần thiết.

// - Ví dụ:
let numbers = [1, 2, 3, 4, 5];
let result = numbers.filter(item => item > 3);
console.log(result); //(2) [4, 5]