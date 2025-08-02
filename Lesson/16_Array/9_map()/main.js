// * Phương thức map

// - Phương thức map là gì?

// + Phương thức map trả về một mảng mới từ mảng hiện tại bằng cách áp dụng một hàm cho mỗi phần tử của mảng ban đầu, mỗi phần tử tương ứng trong mảng mới được trả về bởi callback. Phương thức này không thay đổi mảng hiện tại mà trả về một mảng mới.

// + Cú pháp:

// let newArray = array.map(callbackFunction(element, index, array) {
    // Trả về giá trị mới cho mỗi phần tử trong mảng mới
// }, thisValue);

// + callbackFunction: Hàm kiểm tra được gọi cho mỗi phần tử trong mảng.
    // element: Phần tử hiện tại đang được xử lý.
    // index (tùy chọn): Chỉ mục của phần tử hiện tại.
    // array (tùy chọn): Mảng đang được sử dụng.
// + thisValue (tùy chọn): Giá trị để sử dụng làm this khi thực hiện callbackFunction.

// + Ví dụ:

const numbers1 = [1, 2, 3, 4];
// Tạo ra mảng mới chứa các phần tử mảng cũ x 2
const result1 = numbers1.map(num => num * 2);
console.log(result1); //(4) [2, 4, 6, 8]

// + Phương thức map được sử dụng khi bạn muốn chuyển đổi các giá trị trong một mảng mà không làm thay đổi mảng gốc.


// * Các cách làm việc với map
// - Chuyển đổi một mảng số thành một mảng chuỗi

const numbers2 = [1, 2, 3];

// const result2 = numbers2.map(num => {
//     return String(num);
// })

// Vì hàm cha nhận tham số gì truyền cho hàm con đúng tham số đó thì chỉ cần đưa hàm con vào thẳng map.
// VD trong trường hợp này là String thì đừng gọi , mà hãy để map tự gọi

const result2 = numbers2.map(String);
console.log(result2); //(3) ["1", "2", "3"]


// - Tính giá sau thuế cho mỗi mặt hàng

const prices3 = [100, 150, 200];
const taxRate3 = 0.1; // 10%

const result3 = prices3.map(price => price + price * taxRate3);

console.log(result3); //(3) [110, 165, 220]


// - Tạo các phần tử HTML từ một mảng dữ liệu

const items4 = ['Apple', 'Banana', 'Orange'];

const result4 = items4.map(item => `<li>${item}</li>`);
const html = `<ul>${result4.join('')}</ul>`;

console.log(html); 
// <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>


// - Tạo ra một mảng chứa tên các người dùng

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 24 },
  { name: "John", age: 26 }
];
const names = users.map(user => user.name);
console.log(names); //(3) ["Alice", "Bob", "John"]


// * Các sai lầm thường gặp

// - Không trả về giá trị trong hàm callback

// + Nếu bạn không trả về giá trị trong hàm callback của map, mảng mới sẽ chứa các phần tử undefined.

const numbers5 = [1, 2, 3];

const result5 = numbers5.map(num => {
    num * num;
});

console.log(result5); //(3) [undefined, undefined, undefined]


// + Cách giải quyết: Luôn trả về giá trị trong hàm callback.

const numbers6 = [1, 2, 3];

const result6 = numbers6.map(num => {

    return num * num;

});

console.log(result6); //(3) [1, 4, 9]


// - Sử dụng map thay cho forEach

// + Đôi khi có những lập trình viên sử dụng map thay thế cho forEach khi không cần tạo mảng mới. Điều này không hiệu quả và có thể gây nhầm lẫn.

const numbers7 = [1, 2, 3];
numbers7.map(num => {
    console.log(num);
});
/*
    1
    2
    3
*/

// + Cách giải quyết: Sử dụng forEach nếu chỉ muốn thực hiện hành động mà không cần tạo mảng mới.

const numbers8 = [1, 2, 3];
numbers8.forEach(num => {
    console.log(num);
});
/*
    1
    2
    3
*/

// Chỉ khi nào muốn tạo ra mảng mới và dùng mảng mới này để làm việc thì mới dùng map không thì dùng forEach