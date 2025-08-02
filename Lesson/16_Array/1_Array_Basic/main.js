// Thêm và xóa phần tử
// - push()
// + push() thêm một hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng.

let fruits = ["Apple", "Banana"];
let newLength = fruits.push("Cherry");
// Khi cần lấy độ dài mới thì mới cần nhận giá trị trả về còn nếu không cần thì chỉ cần gọi push thôi

console.log(fruits); // (3) ["Apple", "Banana", "Cherry"]
console.log(newLength); // 3


// + Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.

// + Trường hợp sử dụng: Khi muốn thêm một hoặc nhiều phần tử vào cuối mảng. Đây là cách cơ bản và phổ biến nhất để thêm dữ liệu vào một mảng.

// + Ngoài ra, push() có thể nhận nhiều tham số hơn, tương ứng với số phần tử muốn thêm vào cuối mảng.


// Ex: Thêm nhiều phần tử vào cuối mảng cùng một lúc
let fruits1 = ["Apple", "Banana"];
fruits.push("Cherry", "Dragonfruit", "Elderberry");
console.log(fruits1); // (5) ["Apple", "Banana", "Cherry", "Dragonfruit", "Elderberry"]


// - pop()
// + pop() loại bỏ phần tử cuối cùng của mảng và trả về phần tử đó.

let fruits2 = ["Apple", "Banana", "Cherry"];
let lastFruit2 = fruits2.pop();

console.log(lastFruit2); // Cherry
console.log(fruits2); //(2) ["Apple", "Banana"]


// + Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.

// + Trường hợp sử dụng: Khi cần xóa và lấy phần tử cuối cùng của mảng.

// - unshift()
// + unshift() thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.

let fruits3 = ["Banana", "Cherry"];
let newLength3 = fruits3.unshift("Apple");

console.log(fruits3); //(3) ["Apple", "Banana", "Cherry"]
console.log(newLength3); // 3


// Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.

// + Trường hợp sử dụng: Khi muốn thêm một hoặc nhiều phần tử vào đầu mảng. Đặc biệt hữu ích khi bạn muốn giữ nguyên thứ tự của các phần tử sau khi thêm mới.

// + Ngoài ra, unshift() có thể nhận nhiều tham số hơn, tương ứng với số phần tử muốn thêm vào đầu mảng.

let numbers = [3, 4, 5];

// + Thêm 1 và 2 vào đầu mảng
numbers.unshift(1, 2);
console.log(numbers); // (5) [1, 2, 3, 4, 5]


// - shift()
// + shift() loại bỏ phần tử đầu tiên của mảng và trả về phần tử đó.

let fruits4 = ["Apple", "Banana", "Cherry"];

let firstFruit4 = fruits4.shift();

console.log(firstFruit4); // Apple
console.log(fruits4); // (2) ["Banana", "Cherry"]

// + Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.

// + Trường hợp sử dụng: Khi muốn xóa phần tử đầu tiên của mảng và cần sử dụng giá trị của phần tử đó. Phương thức này thường được dùng trong các tình huống như xử lý hàng đợi.

// Tìm kiếm và kiểm tra phần tử:

// - indexOf()
// + indexOf() tìm chỉ số đầu tiên của một phần tử trong mảng. Nếu không tìm thấy, trả về -1.

let fruits5 = ["Apple", "Banana", "Cherry" , NaN];
console.log(fruits5.indexOf("Banana")); // 1
console.log(fruits5.indexOf("Mango")); // -1
console.log(fruits5,indexOf(NaN)); // -1
// + Mặc dù có nhưng hàm này sẽ so sánh bằng toán tử "===" thì khi bạn so sánh NaN với nhau nó cũng sẽ không bằng nhau


// + Lưu ý: So sánh giữa các phần tử là chính xác (strict equality), tức là cả kiểu dữ liệu và giá trị.

// + Trường hợp sử dụng: Khi cần xác định vị trí của một phần tử trong mảng. Đặc biệt hữu ích khi kiểm tra xem một giá trị có tồn tại trong mảng hay không và biết được vị trí của nó.

// + Ngoài ra, indexOf() có thể nhận thêm một tham số thứ hai, đó là vị trí bắt đầu tìm kiếm trong mảng.


let fruits6 = ["Apple", "Banana", "Cherry", "Apple"];

// Tìm "Apple" bắt đầu từ vị trí 2
console.log(fruits6.indexOf("Apple", 2)); //3


// - lastIndexOf()
// + lastIndexOf() tìm chỉ số cuối cùng của một phần tử trong mảng. Nếu không tìm thấy, trả về -1.

let numbers2 = [1, 2, 3, 2, 1];
console.log(numbers2.lastIndexOf(2)); // 3

// + Lưu ý: Tìm kiếm từ cuối mảng về đầu mảng.

// + Trường hợp sử dụng: Khi cần tìm vị trí xuất hiện cuối cùng của một phần tử, đặc biệt hữu ích trong các mảng có các phần tử lặp lại và bạn muốn biết vị trí lần xuất hiện cuối cùng của chúng.

// + Ngoài ra, giống như indexOf(), lastIndexOf() cũng có thể nhận một tham số thứ hai là vị trí bắt đầu tìm kiếm, nhưng nó sẽ tìm từ cuối mảng lên.


let numbers3 = [1, 2, 3, 4, 2, 5];
// Tìm "2" bắt đầu từ vị trí 4 về đầu mảng
console.log(numbers3.lastIndexOf(2, 3)); //1


// - includes()
// + includes() kiểm tra xem một mảng có chứa một phần tử nhất định hay không, trả về true hoặc false.


let numbers4 = [1, 2, 3];
console.log(numbers4.includes(2)); // true
console.log(numbers4.includes(4)); // false


// + Lưu ý: Phương thức này sử dụng same-value-zero comparison algorithm để xác định xem một mảng có chứa một giá trị nhất định hay không. Điều này khác biệt so với strict equality (===) ở chỗ nó coi NaN là bằng nhau (trong khi NaN === NaN trả về false).

// + Trường hợp sử dụng: Khi cần kiểm tra xem một mảng có chứa một phần tử nhất định hay không, mà không quan tâm đến vị trí của phần tử đó.


// Chuyển đổi và đảo ngược mảng

// - join()
// + join() nối tất cả các phần tử của mảng thành một chuỗi, với một dấu phân cách giữa chúng.

let fruits7 = ["Apple", "Banana", "Cherry"];
console.log(fruits7.join(" / "));
// Apple / Banana / Cherry


// + Lưu ý: Nếu mảng có phần tử undefined hoặc null, chúng sẽ được chuyển thành chuỗi rỗng trong chuỗi kết quả.

// + Trường hợp sử dụng: Khi muốn biến một mảng thành một chuỗi, có thể dùng để tạo ra một chuỗi từ các phần tử của mảng, như tạo ra một danh sách được ngăn cách bằng dấu phẩy, hoặc một đoạn văn.

// - reverse()
// + reverse() đảo ngược thứ tự của một mảng và trả về mảng đã được đảo ngược.

let numbers5 = [1, 2, 3];
// Đảo ngược thứ tự các phần tử
const reversed = numbers5.reverse();
console.log(reversed); // (3) [3, 2, 1]


// + Lưu ý: Mảng sẽ bị thay đổi sau khi gọi method này.

// + Trường hợp sử dụng: Khi muốn đảo ngược thứ tự các phần tử trong mảng, có thể dùng cho việc sắp xếp hoặc đơn giản chỉ là để đảo ngược thứ tự hiển thị.

// - toString()
// + toString() chuyển đổi mảng thành một chuỗi các giá trị, cách nhau bằng dấu phẩy.

let fruits8 = ["Apple", "Banana", "Cherry"];
console.log(fruits8.toString());  // Apple,Banana,Cherry


// + Lưu ý: Tương tự như join() nhưng không thể chỉ định dấu phân cách.

// + Trường hợp sử dụng: Khi cần chuyển một mảng thành một chuỗi để hiển thị hoặc lưu trữ. Phương thức này tự động được gọi khi một mảng cần được chuyển đổi thành chuỗi, như trong việc nối chuỗi (ép kiểu).

// Các sai lầm thường gặp
// - Quên rằng push(), pop(), unshift(), shift() và reverse() thay đổi mảng ban đầu
// + Sai lầm: Sử dụng các phương thức này với suy nghĩ mảng ban đầu không thay đổi, dẫn đến việc mất mát dữ liệu không mong muốn.
// + Khắc phục: Luôn nhớ rằng những phương thức này sẽ thay đổi mảng gốc. Nếu muốn giữ nguyên mảng ban đầu, cân nhắc sử dụng các phương thức khác hoặc sao chép mảng trước khi thực hiện thay đổi.
// - Sử dụng indexOf() trên mảng có chứa NaN
// + Sai lầm: indexOf() không thể tìm thấy NaN trong mảng vì NaN không bằng chính nó (NaN === NaN là false).
// + Khắc phục: Sử dụng includes() để xử lý trường hợp có NaN.