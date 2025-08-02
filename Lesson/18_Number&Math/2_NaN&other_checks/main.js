// * NaN là gì?

// - NaN (Not-a-Number) là một giá trị đặc biệt trong JavaScript biểu thị một kết quả không phải là số hợp lệ. Thường xuất hiện khi thực hiện các phép toán không hợp lệ, chẳng hạn như chia 0 cho 0 hoặc chuyển đổi chuỗi không phải là số sang số.

console.log(0 / 0); // NaN

console.log(parseInt('abc')); // NaN

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Tại sao cần kiểm tra NaN?

// - Khi làm việc với dữ liệu số hoặc các phép toán, bạn cần kiểm tra NaN để xử lý lỗi hoặc kiểm soát logic chương trình.
// - Tránh các lỗi logic khi xử lý số liệu.
// -  Xử lý dữ liệu đầu vào không hợp lệ.

// - Ví dụ:

function double(value) {
  return isNaN(value) ? "Invalid input" : value * 2;
}
let input1 = parseInt('abc'); // NaN
let input2 = parseInt('2'); // 2

console.log(double(input1)); // "Invalid input"
console.log(double(input2)); // 4

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Các cách kiểm tra NaN

// - Sử dụng isNaN()

// + isNaN() là hàm chuẩn của JavaScript để kiểm tra một giá trị có phải là NaN hay không.
console.log(isNaN(NaN)); // true

// + Tuy nhiên, cần lưu ý rằng isNaN sẽ chuyển đổi giá trị sang kiểu số trước khi kiểm tra nên có thể dẫn tới kết quả không như ý muốn.
console.log(isNaN("abc")); // true

// + Ví vậy cần kết hợp thêm kiểm tra kiểu dữ liệu mới đảm bảo tính chính xác.
let x = "abc";
console.log(typeof x === 'number' && isNaN(x)); // false

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Sử dụng Number.isNaN()

// - Number.isNaN() kiểm tra giá trị có phải là NaN một cách chính xác hơn so với isNaN(). Hàm này chỉ trả về true nếu giá trị thực sự là NaN.

console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("abc")); // false

// - Number.isNaN() không thực hiện chuyển đổi kiểu dữ liệu trước khi kiểm tra như isNaN().

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Kiểm tra bằng phép so sánh NaN !== NaN

// - NaN là giá trị duy nhất trong JavaScript mà không bằng chính nó, nên có thể sử dụng phép so sánh này để kiểm tra NaN.

let value = NaN;
console.log(value !== value); // true

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Sử dụng Object.is(NaN, value)

// - Object.is() là phương pháp kiểm tra tương đương với phép so sánh nghiêm ngặt ===, nhưng nó xử lý NaN đúng như mong đợi.

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(NaN, 42)); // false

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Các sai lầm thường gặp

// - Sử dụng isNaN() cho mọi trường hợp
// + isNaN() chuyển đổi giá trị sang số trước khi kiểm tra, dẫn đến các kết quả không mong muốn.

console.log(isNaN("abc")); // true

// - Cách giải quyết:
// + Kết hợp kiểm tra kiểu phải là số (typeof value === 'number')
// + Sử dụng Number.isNaN() để kiểm tra chính xác hơn
// + Sử dụng Object.is(NaN, value) để kiểm tra chính xác hơn

let value1 = "abc";

console.log(typeof value1 === 'number' && isNaN(value1)); // false
console.log(Number.isNaN(value1)); // false
console.log(Object.is(NaN, value1)); // false

// - Tưởng rằng NaN bằng với chính nó
// + Một số người cho rằng NaN === NaN, nhưng điều này luôn sai.

console.log(NaN === NaN); // false

// - Cách giải quyết: Sử dụng các cách kiểm tra đã hướng dẫn ở trên để kiểm tra NaN chính xác hơn.

//--------------------------------------------------------------------------------------------------------------------------------------------

// * Không kiểm tra NaN trước khi thực hiện phép toán

// - Người mới có thể không kiểm tra NaN trước khi sử dụng giá trị trong phép toán, dẫn đến kết quả không mong muốn.

let value2 = NaN;
let result = value2 + 5;

console.log(result); // NaN

// - Cách giải quyết: Kiểm tra và xử lý NaN trước khi thực hiện các phép toán.

if (Number.isNaN(value2)) {
  console.log('Không thể thực hiện phép toán với NaN');
} else {
  let result = value2 + 5;
}

// * Không phải mọi trường hợp thực hiện phép toán đều cần kiểm tra NaN, chỉ cần kiểm tra cho những trường hợp giá trị có thể là NaN. Nếu chắc chắn được logic không xảy ra trường hợp đó, bạn có thể bỏ qua bước kiểm tra này.