// * Hoisting là gì?
// - Hoisting là một cơ chế trong JavaScript, trong đó biến và hàm giống như được “kéo lên trên cùng” của phạm vi (scope) trước khi code được thực thi.

// - Nói đơn giản: Bạn có thể sử dụng biến hoặc hàm trước khi khai báo chúng trong code - nhưng với một số điều kiện nhất định!

// - Ví dụ 1: Biến với var

console.log(x); // undefined
var x = 5;

// - Giải thích:

// + JavaScript “kéo” phần khai báo var x lên đầu, như sau:

var x;
console.log(x); // undefined
x = 5;

// + Chỉ phần khai báo được hoist, không phải phần gán giá trị!

// - Ví dụ 2: Biến với let và const
console.log(y); // ❌ Lỗi ReferenceError!
let y = 10;

// - Giải thích:

// + Biến khai báo bằng let và const cũng được hoist, nhưng chúng nằm trong cái gọi là “Temporal Dead Zone” (TDZ) - khoảng thời gian mà biến đã được hoist nhưng chưa thể sử dụng được.

// + Bạn phải khai báo xong rồi mới được dùng khi dùng let hoặc const.

// - Ví dụ 3: Hoisting với function
sayHi();

function sayHi() {
  console.log("Xin chào!");
}

// - Giải thích:

// + Hàm khai báo theo kiểu function được hoist hoàn toàn, cả phần tên và nội dung.

// + Bạn có thể gọi hàm trước khi khai báo.

// - Ví dụ 4: Hàm được gán vào biến (function expression)

// greet(); // ❌ Lỗi TypeError

var greet = function () {
  console.log("Chào bạn!");
};

// - Giải thích:

// + Biến greet được hoist như var, nhưng giá trị là undefined nên khi gọi như một hàm sẽ xảy ra lỗi.

// + Chỉ function declaration mới được hoist toàn phần, Function expression thì không.

// - Bảng so sánh

//|---------------------|---------------|------------------------------------------|
//| Loại khai báo	    | Có hoisting?  |	Dùng trước khai báo được không?        |
//|---------------------|---------------|------------------------------------------|
//| var	                |   ✅ Có	  |  ✅ Được (nhưng giá trị là undefined)    |
//|---------------------|-------------- |------------------------------------------|
//| let / const	        |   ✅ Có	  |  ❌ Không (TDZ - Temporal Dead Zone)     |
//|---------------------|---------------|------------------------------------------|
//| function	        |   ✅ Có	  |  ✅ Được                                 |
//|---------------------|---------------|------------------------------------------|
//| function expression |	✅ (biến)  |	 ❌ Không (biến là undefined)            |
//|---------------------|---------------|------------------------------------------|
