// Thêm 1 cách kiểm tra kiểu dữ liệu của js

// Cách này có thể dùng để kiểm tra mọi kiểu dữ liệu của js. Tuy nhiên nó lại hữu hiệu hơn khi kiểm tra Object

//Ex:

//Đúng nhưng chưa đủ

function isObject(value) {
  return value.toString() === "[object Object]";
}

console.log(isObject({})); // true

console.log(isObject(123)); // false
// Đúng như mong đợi

console.log(isObject("Hello")); //false

// console.log(isObject(null)); // error
// null và undefined đều lỗi
// nhưng kì vọng là trả về false

// console.log(isObject(Object.create(null))); //error

console.log(isObject("[object Object]")); // true
// trong prototype toString đã bị String ghi đè nên, 1 chuỗi gọi toString sẽ trả về chính giá trị này thôi

// Vì vậy cách này nhìn có vẻ ổn nhưng có thể bị lỗi và báo sai kết quả

// Đây đúng là cách mà nhiều người dùng nhưng không dùng bằng cách đứng ngay giá trị value gọi toString như này value.toString().

// Mà thay vào đó sẽ chọc trực tiếp vào Object.prototype.toString() để dùng

// Lí do có thể dùng được như vậy vì, Object.prototype.toString là hàm

//Trong js có cung cấp các phương thức trên các hàm là Call

// Ex:

console.log(Object.prototype.toString.call(1)); // [object Number]

console.log(Object.prototype.toString.call(null)); // [object Null]
//undefined tương tự

console.log(Object.prototype.toString.call(Object.create(null))); // [object Object]

console.log(Object.prototype.toString.call(() => {})); // [object Function]

console.log(Object.prototype.toString.call([])); // [object Array]

console.log(Object.prototype.toString.call(1n)); // [object BigInt]

// Sửa lại hàm ở trên

function isObject1(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

console.log(isObject1(null)); //false

console.log(isObject1([])); //false

// Điểm lưu ý:
// + Với cách này thì với các obj được khởi tạo từ hàm tạo thì sẽ không coi là obj

// Ex
const number = new Number(123);

console.log(isObject1(number)); //false
//Trong tình huống này sẽ trả về tên hàm tạo [object Number]

// Hữu ích trong number và object vì phải kiểm tra nhiều điều kiện
// Còn vd như string hay function thì chỉ cần typeof là có thể kiểm tra được rồi.
