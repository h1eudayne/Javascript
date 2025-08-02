// * Hàm là gì?
// - Hàm trong JavaScript là một khối code được thiết kế để thực hiện một tác vụ cụ thể. Hàm cho phép tái sử dụng code, thay vì viết lại cùng một đoạn code nhiều lần, bạn chỉ cần định nghĩa hàm một lần và gọi hàm đó khi cần.

// * Cách sử dụng hàm
// - Định nghĩa hàm (Function definition)
// + Để tạo một hàm, bạn sử dụng từ khóa function, sau đó là tên của hàm, tiếp theo là một cặp dấu ngoặc đơn (), và một cặp dấu ngoặc nhọn {} bao quanh phần thân của hàm.

// - Cú pháp:

function functionName() {
  // code block
}

// Ví dụ:

function showGreeting() {
  console.log("Xin chào!");
  console.log("Đây là khóa học JavaScript Pro!");
}

// + Khi hàm mới chỉ được định nghĩa, phần code trong thân của hàm sẽ không được chạy cho tới khi hàm được gọi.

// - Gọi hàm (Calling a function)

// + Để gọi hàm, ta sử dụng () sau tên một hàm.

showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

// + Bạn có thể gọi hàm nhiều lần, mỗi lần hàm được gọi thì code trong phần thân hàm sẽ được thực thi lại từ đầu.

showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

showGreeting(); // In ra: Xin chào!
// Đây là khóa học JavaScript Pro!

// + Ở đây hàm showGreeting vừa được gọi thêm hai lần, nội dung xin chào sẽ được in ra tương ứng cho mỗi lần gọi hàm.

// - Hàm có tham số (Parameters)
// + Hàm showGreeting ở trên đã có thể sử dụng lại nhiều lần. Tuy nhiên nó chưa đủ linh hoạt, vì nội dung trong console.log() đang được viết cố định bên trong phần thân của hàm. Để linh hoạt hơn, ta có thể định nghĩa tham số như sau.

// + Thêm tham số message cho hàm:

function showGreeting(message) {
  console.log("Xin chào!");
  console.log(message);
}
// + Tại console.log() bên dưới, thay vì viết cố định nội dung như trước thì bây giờ nó nhận vào tham số message.

// - Cách gọi hàm có tham số như sau:

showGreeting("Đây là khóa học của F8!"); // In ra: Xin chào!
// Đây là khóa học của F8!

showGreeting("Chào mừng bạn đã gia nhập F8!"); // In ra: Xin chào!
// Chào mừng bạn đã gia nhập F8!

// - Lúc này, nội dung được in ra từ console.log() bên dưới sẽ tương ứng với giá trị được truyền vào khi gọi hàm.

// - Lưu ý: Giá trị được truyền vào khi gọi hàm được gọi là đối số. Ví dụ: showGreeting("Đây là khóa học của F8!") thì chuỗi "Đây là khóa học của F8!" là đối số của tham số message.

// - Một hàm có thể có nhiều tham số:

// Mỗi tham số ngăn cách bằng một dấu phẩy (,)
function demo(param1, param2, param3) {
  console.log(param1, param2, param3);
}

// - Khi gọi hàm, ta có thể truyền nhiều đối số tương ứng:

demo("Value 1", "Value 2", "Value 3"); // In ra: Value 1, Value 2, Value 3
// Có thể gọi hàm với số lượng đối số không giống với số lượng tham số:

demo("Value 1", "Value 2"); // In ra: Value 1, Value 2, undefined
// Mặc dù hàm demo() được định nghĩa có 3 tham số là param1, param2, param3. Tuy nhiên khi gọi chỉ truyền có 2 đối số là "Value 1" và "Value 2", lúc này giá trị của param3 sẽ là undefined (vì không được truyền đối số tương ứng).

// - Tham số mặc định (Default parameters)
// + Giá trị mặc định của tham số sẽ được sử dụng khi đối số tương ứng không được truyền giá trị, hoặc khi truyền giá trị là undefined.

// + Sửa lại hàm demo, đặt "Default value 3" làm mặc định cho param3:

function demo(param1, param2, param3 = "Default value 3") {
  console.log(param1, param2, param3);
}
// + Sau đó gọi hàm demo() mà không truyền đối số thứ 3:

demo("Value 1", "Value 2"); // In ra: Value 1, Value 2, Default value 3
// + Khi không truyền đối số thứ 3, giá trị mặc định "Default value 3" đã được sử dụng, nên khi console.log() tham số param3 thì Default value 3 được in ra.

// + Hoặc khi gọi demo() với đối số thứ 3 là giá trị undefined:

demo("Value 1", "Value 2", undefined); // In ra: Value 1, Value 2, Default value 3
// + Lúc này, giá trị mặc định của param3 cũng sẽ được sử dụng. Tóm lại, chỉ cần tham số có giá trị mặc định và khi gọi hàm nó là undefined thì giá trị mặc định sẽ được sử dụng.

// + Nếu ta truyền đầy đủ đối số, thì giá trị mặc định sẽ không được sử dụng:

demo("Value 1", "Value 2", "Value 3"); // In ra: Value 1, Value 2, Value 3
// + Lúc này, giá trị của param3 sẽ là "Value 3".

// - Hàm trả về giá trị (Return value)
// + Hàm có thể trả về một giá trị, nó tương tự như việc sử dụng “công thức nấu ăn” cuối cùng sẽ trả về “món ăn” vậy.

// - Hãy xem xét hàm sau:

function sum(a, b) {
  console.log(a + b);
}
// + Hàm này tên là sum, nhận tham số a, b và in ra tổng của a + b.

// + Nếu chúng ta cần nhận lại được kết quả của phép cộng trên sau khi gọi hàm, thay vì in nó ra thì làm thế nào?

// + Chỉ cần sử dụng từ khóa return như sau:

function sum(a, b) {
  return a + b;
}
// + Từ khóa return được sử dụng để trả về kết quả khi gọi một hàm.

// + Từ khóa return sẽ trả về giá trị và thoát hàm. Khi return được thực thi, những dòng code trong hàm nằm phía sau return sẽ bị bỏ qua.

// + Khi gọi hàm có sử dụng return ta sẽ nhận lại giá trị tương ứng:

// + In kết quả của hàm sum():

console.log(sum(2, 3)); // In ra: 5

// Hoặc gán kết quả vào một biến:
const result = sum(2, 3);
console.log(result); // In ra: 5

// + Ta có thể sử dụng lại hàm nhiều lần với các đối số khác nhau:

const result1 = sum(3, 3);
console.log(result1); // In ra: 6

const result2 = sum(5, 3);
console.log(result2); // In ra: 8

// + Chỉ cần thay đổi đối số đầu vào thì kết quả trả về sẽ thay đổi tương ứng.

// - Lưu ý, một hàm không return thì sẽ nhận lại undefined khi gọi hàm:

function sum(a, b) {
  a + b;
}
console.log(sum(1, 2)); // In ra: undefined

// - Một lưu ý khác, tránh nhầm lẫn console.log() với return.

// - Xem xét ví dụ sau:

function sum(a, b) {
  console.log(a + b);
}
sum(2, 5); // In ra: 7

// - Lúc này, hàm sum không hề trả về giá trị 5, số 5 được in ra bởi console.log() được sử dụng trong phần thân của hàm.
