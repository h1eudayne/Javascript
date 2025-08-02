// * Tại sao cần sao chép mảng
// + Trong JavaScript, mảng là kiểu tham chiếu. Khi bạn gán một mảng cho một biến khác, cả hai biến sẽ tham chiếu đến cùng một địa chỉ bộ nhớ. Điều này có nghĩa là, nếu bạn thay đổi mảng thông qua một biến, mảng được tham chiếu qua biến kia cũng sẽ thay đổi. Để tránh điều này, cần phải sao chép mảng.

// - Ưu điểm khi sao chép mảng:
// + Tránh được tình trạng hai biến tác động lẫn nhau thông qua tham chiếu chung.
// + Giúp dễ dàng quản lý và dự đoán kết quả khi làm việc với các hàm, bảo đảm không làm thay đổi mảng gốc.

// * Các cách sao chép mảng

// - Sử dụng phương thức slice()
// + Phương thức slice() trả về một bản sao nông của mảng, từ index bắt đầu cho đến index kết thúc mà không thay đổi mảng gốc. Nếu không chỉ định index, mặc định sẽ sao chép toàn bộ mảng.

let original = [1, 2, 3];

// Copy toàn bộ mảng
let copied = original.slice();

// + Thay đổi phần tử đầu tiên của mảng sao chép
copied[0] = 99;

console.log(original); // [1, 2, 3]

console.log(copied); // [99, 2, 3]
/*
    (3) [1, 2, 3]
    (3) [99, 2, 3]
*/

// + Mảng copied được tạo ra bởi phương thức slice() là một bản sao nông của original. Khi thay đổi copied[0] thành 99, chỉ mảng copied thay đổi, trong khi mảng original giữ nguyên giá trị ban đầu.

// - Sử dụng phương thức Object.assign()
// + Object.assign() thường được dùng để sao chép các thuộc tính từ một hoặc nhiều đối tượng nguồn vào một đối tượng đích. Khi dùng với mảng, nó tạo một bản sao nông của mảng.

let original1 = [1, 2, 3];

// + Sử dụng một mảng rỗng làm đích để sao chép vào
let copied1 = Object.assign([], original1);

// + Thay đổi phần tử thứ hai của mảng sao chép
copied1[1] = 99;

console.log(original1); // [1, 2, 3]

console.log(copied1); // [1, 99, 3]
/*
    (3) [1, 2, 3]
    (3) [1, 99, 3]
*/

// + copied1 là kết quả của việc sao chép các phần tử của original1 vào một mảng rỗng. Khi thay đổi giá trị trong copied1, mảng original1 không bị ảnh hưởng vì đây là một bản sao nông.

// - Sử dụng phương thức concat()
// + Phương thức concat() được sử dụng để nối các mảng lại với nhau. Khi được gọi mà không có đối số, nó trả về một bản sao nông của mảng gốc.

let original2 = [1, 2, 3];

// Tạo bản sao của mảng original2
let copied2 = original2.concat();

// let copied2 = original2.concat([]);

// let copied2 = [].concat(original2);

// Thay đổi phần tử thứ ba của mảng sao chép
copied2[2] = 99;

console.log(original2); // [1, 2, 3]

console.log(copied2); // [1, 2, 99]
/*
    (3) [1, 2, 3]
    (3) [1, 2, 99]
*/

// + Tạo copied2 bằng cách nối original2 vào một mảng rỗng. Thay đổi trên copied2 không ảnh hưởng đến original2 do đây là sao chép nông.

// - Sử dụng phương thức Array.from()
// + Array.from() tạo một bản sao nông mới từ một đối tượng có thể được chuyển đổi thành mảng hoặc một đối tượng giống như mảng .
// + Array.from() thường được dùng khi truyền vào 1 obj đặc biệt mà giống như mảng. Các obj này có các tính chất giống như mảng nhưng không có các phương thức làm việc với mảng (vd: filter(), reduce()) trên obj đó nhưng mà không được nên là ta sẽ truyền obj đó vào đây.

let original3 = [1, 2, 3];

// Tạo bản sao của mảng
let copied3 = Array.from(original3);

// Thay đổi phần tử đầu tiên của mảng sao chép
copied3[0] = 99;

console.log(original3); // [1, 2, 3]

console.log(copied3); // [99, 2, 3]
/*
    (3) [1, 2, 3]
    (3) [99, 2, 3]
*/

// + Mảng copied3 là bản sao nông của original3 tạo ra qua Array.from(). Các thay đổi trên copied3 không tác động đến original3, giúp đảm bảo tính toàn vẹn của mảng gốc.

// * Sao chép nông và sâu

// - Sao chép nông
// + Những phương thức trên đều tạo ra các bản sao nông (shallow copy), có nghĩa là chúng chỉ sao chép các phần tử ở mức độ đầu tiên của mảng. Nếu các phần tử này là các đối tượng hoặc mảng khác, các thay đổi trên các đối tượng hoặc mảng con này vẫn ảnh hưởng đến mảng gốc.

// - Ví dụ:

let a = [1, 2, 3, [5, 6, 7]];
let b = a.slice();

// Sửa phần tử đầu tiên trong mảng con
b[3][0] = 55;

// Ảnh hưởng với mảng gốc
console.log(a); // (4) [1, 2, 3, Array(3)] 55 , 6 , 7


// - Sao chép sâu
// + structuredClone() tạo một bản sao độc lập hoàn toàn của một đối tượng hoặc mảng gốc.

let a1 = [1, 2, 3, [5, 6, 7]];
let b1 = structuredClone(a1);

// Sửa phần tử đầu tiên trong mảng con
b1[3][0] = 55;

// Không ảnh hưởng với mảng gốc
console.log(a1); // (4) [1, 2, 3, Array(3)] 5 , 6 , 7