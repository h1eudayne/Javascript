// * concat() là gì?

// - Phương thức concat() được sử dụng để nối hai hoặc nhiều chuỗi với nhau.

// - Cú pháp:
// let newString = str1.concat(str2, str3, ..., strN);

// - Ví dụ:

let greeting = "Hello, ";
let name = "Alice";
let fullGreeting = greeting.concat(name);

console.log(fullGreeting); // Hello, Alice


// - Phương thức concat() hữu ích khi bạn cần nối nhiều chuỗi lại với nhau mà không cần dùng dấu cộng (+).

// - Bài toán và ví dụ:
// + Nối tên và họ của một người:

let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);

console.log(fullName); // John Doe


// - Tạo câu chào mừng cá nhân hóa:

let greeting1 = "Welcome, ";
let userName1 = "Bob";
let personalized1 = greeting1.concat(userName1, "!");

console.log(personalized1); // Welcome, Bob!

// ---------------------------------------------------------------------------------------------------- 

// * slice() là gì?

// - Phương thức slice() được sử dụng để trích xuất một phần của chuỗi cha và trả về chuỗi con mới.

// - Cú pháp:
// let newString = str.slice(startIndex, endIndex);

// - Ví dụ:

let text2 = "Hello, world!";
let result2 = text2.slice(0, 5);

console.log(result2); // Hello


// - Phương thức slice() hữu ích khi bạn cần lấy một phần của chuỗi theo vị trí bắt đầu và kết thúc.

// + Bài toán và ví dụ:

// Lấy từ đầu tiên trong câu:

let sentence3 = "JavaScript is fun";
let firstWord3 = sentence3.slice(0, 10);

console.log(firstWord3); // JavaScript


// Lấy từ cuối cùng trong câu:

let text4 = "Hello world";
let tail4 = text4.slice(-5);

console.log(tail4); // world

// Nếu dùng số âm vẫn xác định điểm cắt từ bên trái rồi mới đến bên phải vd slice(-6 , -1).

// ---------------------------------------------------------------------------------------------------- 

// * substring() là gì?
// - Phương thức substring() được sử dụng để trích xuất các ký tự trong chuỗi giữa hai chỉ mục.

// - Cú pháp:
// let newString = str.substring(startIndex, endIndex);

// - Ví dụ:

let text5 = "Hello, world!";
let result5 = text5.substring(0, 5);

console.log(result5); // Hello


// - Phương thức substring() hữu ích khi bạn cần lấy một phần của chuỗi giữa hai chỉ mục.

// - Bài toán và ví dụ:

let text6 = "Hello, world!";
let middle6 = text6.substring(7, 12);

console.log(middle6); //world


// - Lấy phần đầu chuỗi:

let text7 = "Hello, world!";
let start7 = text7.substring(0, 5);

console.log(start7); // Hello


// - Khác biệt so với slice()
// + Cả substring và slice đều được sử dụng để lấy một phần của chuỗi. Tuy nhiên, chúng có một số điểm khác nhau quan trọng về cách thức hoạt động và cách chúng xử lý các tham số đầu vào.

// - Với substring:
// + Nếu start lớn hơn end, substring sẽ hoán đổi hai tham số.
// + Nếu bất kỳ tham số nào là số âm hoặc NaN, chúng được xem là 0.
// + Nếu bất kỳ tham số nào lớn hơn độ dài của chuỗi, chúng được xem là độ dài của chuỗi.
// + Không hỗ trợ chỉ mục âm.


// - Ví dụ:

let str7 = "Hello, World!";

console.log(str7.substring(0, 5)); // "Hello"
console.log(str7.substring(7)); // "World!"
console.log(str7.substring(7, 12)); // "World"
console.log(str7.substring(12, 7)); // "World"
console.log(str7.substring(-3, 5)); // "Hello"


// - Với slice:
// + Nếu start lớn hơn end, slice sẽ trả về một chuỗi rỗng.
// + start và end có thể là số âm, được tính từ cuối chuỗi.
// + Nếu bất kỳ tham số nào lớn hơn độ dài của chuỗi, chúng được xem là độ dài của chuỗi.

// - Ví dụ:

let str8 = "Hello, World!";

console.log(str8.slice(0, 5)); // "Hello"
console.log(str8.slice(7)); // "World!"
console.log(str8.slice(7, 12)); // "World"
console.log(str8.slice(12, 7)); // ""
console.log(str8.slice(-6, -1)); // "World"

// - Bảng so sánh slice() và substring()

// + Dưới đây là bảng so sánh sự khác biệt giữa hai phương thức này:

// ---------------------------------------------------------------------------------------------------- 
// | Đặc điểm	       |            substring	                |                slice                |
// ---------------------------------------------------------------------------------------------------- 
// | Hoán đổi tham số  | Nếu start > end, hoán đổi start và end	|  Nếu start > end, trả về chuỗi rỗng |
// ---------------------------------------------------------------------------------------------------- 
// | Chỉ số âm	       | Xem chỉ số âm là 0	                    |  Chỉ số âm tính từ cuối chuỗi       |
// ---------------------------------------------------------------------------------------------------- 
// | Đầu vào           | NaN Được xem là 0	                    |  Được xem là 0                      |
// ---------------------------------------------------------------------------------------------------- 

// + Với các đặc điểm và ví dụ trên, bạn có thể chọn phương thức phù hợp nhất cho trường hợp sử dụng cụ thể của mình.

// - Lưu ý:
// + Nếu chỉ cần cắt và không có yêu cầu gì đặt biệt thì nên dùng slice().
// + Còn điểm bắt đầu cắt và kết thúc cắt không rõ ràng không biết thứ tự thì dùng subString().

// ---------------------------------------------------------------------------------------------------- 

// * split() là gì?

// - Phương thức split() được sử dụng để chia một chuỗi thành một mảng các chuỗi con, dựa trên một ký tự phân tách.

// - Cú pháp:
// let newArray = str.split(separator, limit);

// - Ví dụ:

let text = "apple, banana, cherry";
let result = text.split(", ");

console.log(result); // (3) ["apple", "banana", "cherry"]


// - Phương thức split() hữu ích khi bạn cần tách một chuỗi thành các phần tử mảng dựa trên ký tự phân tách.

// - Bài toán và ví dụ:

// + Tách chuỗi thành mảng chứa các từ:

let sentence = "The quick brown fox";
let words = sentence.split(" ");

console.log(words); // (4) ["The", "quick", "brown", "fox"]


// + Tách chuỗi theo dấu phẩy:

let fruits = "apple,banana,cherry";
let fruitList = fruits.split(",");

console.log(fruitList); // (3) ["apple", "banana", "cherry"]


// * Các sai lầm thường gặp

// - Sử dụng sai chỉ mục trong slice() và substring()
// + Khi sử dụng slice() và substring(), nếu bạn nhập chỉ số không hợp lý hoặc nhầm lẫn, bạn có thể không lấy được kết quả mong muốn.

// - Không truyền ký tự phân tách trong split()
// + Nếu không truyền ký tự phân tách khi dùng split(), chuỗi sẽ không được chia thành các phần tử như mong muốn.