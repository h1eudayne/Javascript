// * Phương thức reduce() là gì?

// + reduce() là một phương thức của mảng trong JavaScript, dùng để thực hiện một hàm lên từng phần tử của mảng (từ trái sang phải) để rút ra một giá trị duy nhất. Nó thường được dùng để tính tổng, tính tích hoặc kết hợp các phần tử của mảng theo cách thức tùy ý.

// - Cú pháp:

// const result = array.reduce(callbackFunction(accumulator, currentValue, currentIndex, array) {
//   // Trả về giá trị tích lũy
// }, initialValue);
// - callbackFunction: Hàm được gọi lại khi duyệt qua mỗi phần tử, gồm các tham số:
    // + accumulator: Giá trị tích lũy được trả lại từ lần gọi hàm trước. Trong lần gọi đầu tiên, nếu initialValue được cung cấp, accumulator sẽ bằng initialValue, nếu không sẽ bằng phần tử đầu tiên của mảng.
    // + currentValue: Giá trị của phần tử hiện tại đang được xử lý trong mảng.
    // + currentIndex (tùy chọn): Index của phần tử hiện tại đang được xử lý. Nếu initialValue được cung cấp, duyệt từ index 0; nếu không, duyệt từ index 1.
    // + array (tùy chọn): Mảng mà reduce() đang được áp dụng.
// - initialValue (tùy chọn): Giá trị khởi tạo ban đầu cho accumulator. Nếu không cung cấp, accumulator sẽ nhận giá trị của phần tử đầu tiên trong mảng, và duyệt mảng bắt đầu từ phần tử thứ hai (index 1).

// + reduce() sẽ trả về accumulator (giá trị tích luỹ).

// + Phương thức reduce sẽ bỏ qua các phần tử trống (empty element) trong mảng.

// - Ví dụ:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, number, index, arr) => {
    console.log(`Index ${index}: total = ${total}, number = ${number}`);
    return total + number;
}, 0); // initialValue là 0
console.log(sum); // Kết quả: 10
/*
    Index 0: total = 0, number = 1
    Index 1: total = 1, number = 2
    Index 2: total = 3, number = 3
    Index 3: total = 6, number = 4
*/

// Trong ví dụ trên, reduce() tính tổng các số trong mảng numbers. Với mỗi lần lặp, hàm được gọi và giá trị của total và number được in ra. Giá trị khởi tạo 0 cho total được sử dụng trong lần gọi đầu tiên của hàm.

// Sử dụng reduce() không chỉ giúp bạn tính toán các kết quả từ một mảng, mà còn cho phép bạn thực hiện các xử lý phức tạp hơn như chuyển đổi cấu trúc dữ liệu, tổng hợp thông tin, và hơn thế nữa.

// - Các cách làm việc với reduce()

// + Tính tổng giá các sản phẩm

const products1 = [
  { name: "iPhone", price: 100 },
  { name: "iPad", price: 200 },
  { name: "Macbook", price: 300 }
];

const total1 = products1.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total1); // 600

// Với object thì nếu muốn trả về 'số' thì bắt buộc phải truyền initialValue(giá trị khởi tạo) bởi vì nếu không truyền thì reduce sẽ dùng phần tử đầu tiền làm giá trị, nhưng phần tử đầu tiên là object trong khi bạn cần là 1 'số'


// + Tính tổng giá trị đơn hàng

const order2 = {
  code: "#DH001",
  products: [
    { name: "iPhone", price: 100, quantity: 1 },
    { name: "iPad", price: 200, quantity: 3 },
    { name: "Macbook", price: 300, quantity: 2 }
  ]
};

const total2 = order2.products.reduce((sum, product) => {
  return sum + product.price * product.quantity;
}, 0);

console.log(total2); // 1300


// + Tạo một object với các giá trị ban đầu và số lần xuất hiện

const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// C1
const count = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});

//C2
const count2 = items.reduce((acc, item) => {
    if(item in acc) {
        acc[item]++;
    } 
    else {
        acc[item] = 1;
    }
    return acc;
}, {})

console.log(count); // {apple: 3, banana: 2, orange: 1}
console.log(count2); // {apple: 3, banana: 2, orange: 1}



// - Các sai lầm thường gặp
// + Bỏ qua giá trị khởi tạo

// const numbers3 = []; // Mảng rỗng

// const total3 = numbers3.reduce((sum, number) => {
//   return sum + number;
// }); 
// // Không cung cấp giá trị khởi tạo
// // Uncaught TypeError: Reduce of empty array with no initial value
// console.log(total3);


//  - Cách giải quyết: Luôn cung cấp giá trị khởi tạo khi sử dụng reduce().

const numbers4 = []; // Mảng rỗng

const total4 = numbers4.reduce((sum, number) => {
  return sum + number;
}, 0); // Thêm giá trị khởi tạo là 0

console.log(total4); // 0


// - Sử dụng reduce() không hiệu quả

// + Dùng reduce() để thực hiện các tác vụ có thể xử lý đơn giản hơn bằng các phương thức khác như forEach(), map(), v.v.

const numbers5 = [1, 2, 3];

const doubled5 = numbers5.reduce((result, number) => {
  result.push(number * 2);
  return result;
}, []);

console.log(doubled5); // (3) [2, 4, 6]


// - Cách giải quyết:

// + Xác định rõ ràng mục đích sử dụng của reduce() và lựa chọn phương thức phù hợp nhất cho nhu cầu xử lý.

const numbers6 = [1, 2, 3];

const doubled6 = numbers6.map(number => number * 2);

console.log(doubled6); // (3) [2, 4, 6]
