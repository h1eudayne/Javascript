// * Phương thức every

// - Phương thức every là gì?

// + every() giống như AND

// + every() là một phương thức kiểm tra xem tất cả các phần tử của mảng có thỏa mãn điều kiện được cung cấp bởi một hàm kiểm tra hay không. Nếu tất cả phần tử thỏa mãn điều kiện, phương thức trả về true; ngược lại, nó trả về false.

// + Cú pháp:
// const bool = array.every(callbackFunction(element, index, array) {
//   // Điều kiện kiểm tra
// }, thisValue);

// + Ví dụ:

const ages = [18, 20, 25, 30];
// Kiểm tra toàn bộ phần tử có từ 18 trở lên không

const result = ages.every(age => age >= 18);
console.log(result); //true

// Phương thức every hữu ích khi bạn cần xác định liệu tất cả các phần tử trong một mảng có đáp ứng một tiêu chuẩn nhất định hay không. Nó được dùng để đảm bảo tính nhất quán của dữ liệu trong một tập hợp.


// - Ví dụ sử dụng every

// + Kiểm tra xem tất cả các sản phẩm trong giỏ hàng có sẵn trong kho không

const products1 = [
  { name: "Apple", stock: 10 },
  { name: "Cherry", stock: 5 },
  { name: "Banana", stock: 0 }
];

const result1 = products1.every(product => product.stock > 0);

console.log(result1); //false


// + Đảm bảo rằng tất cả thành viên trong một nhóm đều từ 18 tuổi.

const members2 = [
  { name: "Bob", age: 10 },
  { name: "John", age: 20 },
  { name: "Alice", age: 18 }
];

const result2 = members2.every(member => member.age >= 18);

console.log(result2); //false

// every() với mảng rỗng

// Mảng rỗng every() sẽ trả về true bởi vì không có phần tử nào sai

// Nhưng vì vậy dẫn đến dễ bị lỗi logic, cách khắc phục là kiểm tra thêm length của mảng nữa.

const agess = [];
const resultt = agess.every(age => age > 18);
console.log(resultt); //true

const resultt1 = !! ages.length &&  ages.every(age => age > 18);
console.log(resultt1); //false



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// * Phương thức some

// - Phương thức some() là gì?

// + some() giống như OR

// + some() là một phương thức của mảng trong JavaScript, được sử dụng để kiểm tra xem có ít nhất một phần tử trong mảng có thỏa mãn một điều kiện cụ thể được xác định bởi một hàm callback hay không. Nếu có một phần tử thỏa mãn điều kiện này, phương thức trả về true, ngược lại nó trả về false.

// + Cú pháp:
// const bool = array.some(callbackFunction(element, index, array) {
//   // Điều kiện kiểm tra
// }, thisValue);

// + Ví dụ:

// Kiểm tra trong mảng có chứa số chẵn không

const numbers3 = [1, 5, 2, 7, 8, 10];
const result3 = numbers3.some(number => number % 2 === 0);
console.log(result3); //true

// Phương thức some() rất hữu ích khi bạn chỉ cần xác định xem trong một mảng có phần tử nào đó thỏa mãn một điều kiện nhất định hay không, mà không cần tất cả phải thỏa mãn điều kiện đó.

// - Ví dụ sử dụng some()

const students4 = [
  { name: 'John', score: 55 },
  { name: 'Bob', score: 80 },
  { name: 'Alice', score: 45 }
];

const result4 = students4.some(student=> student.score >= 60);

console.log(result4); //true


// - Kiểm tra xem có sản phẩm nào hết hàng không

const products5 = [
  { name: 'Tablet', stock: 10 },
  { name: 'Laptop', stock: 0 },
  { name: 'Phone', stock: 5 }
];

const result5 = products5.some(product => product.stock === 0);

console.log(result5); // true

// - Với mảng rỗng thì some() sẽ trả về false


// * Các sai lầm thường gặp

// - Hiểu nhầm về giá trị trả về của every()

// + Nhiều người mới học thường nhầm lẫn rằng every sẽ trả về false nếu mảng rỗng. Tuy nhiên, theo định nghĩa, every sẽ trả về true cho mảng rỗng vì không có phần tử nào vi phạm điều kiện.

const numbers6 = [];

const result6 = numbers6.every(num => num > 0);

console.log(result6); // true

if (result6) {
  console.log('Do something...'); // Do something...
} 


// Cách giải quyết: Luôn kiểm tra mảng có phần tử trước khi áp dụng every.

const numbers7 = [];

const result7 = numbers7.every(num => num > 0);

if (numbers7.length && result7) {
  console.log('Do something...');
}