// Từ khoá this nằm trong hàm khó kiểm soát, chỉ cần thay đổi cách gọi hàm thì từ khoá this đã thay đổi tham chiếu rồi. Nhiều khi sử dụng các hàm bên trong có từ khoá this chỉ cần thay đổi cách gọi hàm thôi đã bị lỗi rồi. Nên phát sinh 1 nhu cầu là có thể chỉ định từ khoá this là phải trỏ về 1 đối tượng cụ thể để làm sao mà thay đổi cách gọi hàm thì từ khoá this cũng không thay đổi tham chiếu. Lúc đó sẽ hạn chế lỗi liên quan đến ngữ cảnh hơn


// Phương thức bind là gì?

// - Phương thức bind tạo ra một hàm mới mà khi được gọi, từ khóa this sẽ được tham chiếu tới bởi đối tượng đã cho.

// - EX:
// const newFunc = oldFunction.bind(thisArg[, arg1[, arg2[, ...]]]);
//                      ^  gọi bind    ^      
//                 hàm ban đầu      truyền vào đối tượng mà muốn this trỏ tới

// Phương thức bind sẽ sao chép hàng ban đầu này ra hàm mới tức là 1 tham chiếu mới, nó sẽ trả về hàm mới đó. Lưu ý phương thức bind không sửa đổi gì trên hàm gốc cả mà chỉ đơn giản là sao chép hàng cũ ra rồi trả về hàm mới và nó đảm bảo rằng khi gọi hàm mới này thì từ khoá this sẽ tham chiếu tới đối tượng đã truyền


// - Ex: Error

const person = {
    firstName: 'John',
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.firstName}`);
    }
};

const greetJohn = person.greet;

greetJohn("Hello"); // Hello, my name is undefined
// Vì đây là cách gọi hàm thông thường

// - Ex: Dùng bind

const person1 = {
    firstName: 'John',
    greet (greeting, param2, param3) {
        console.log(param2);
        console.log(param3);
        console.log(`${greeting}, my name is ${this.firstName}`);
    }
};

// C1
const greetJohn1 = person1.greet.bind(person1, "Hello");
//                                                ^
//                                           tham số thứ nhất


// C2
greetJohn1("Hi", "Hehe"); // nếu truyền vào như này tham số thứ nhất sẽ không bị ghi đè thay vào đó sẽ theo trình tự các tham số tăng dần
//          ^       ^
//        tst2     tst3

// C1 phù hợp cho các tham số đều trùng giá trị theo vd trên là "Hello"
// Còn nếu các bạn muốn truyền giá trị khi gọi hàm thì không được dùng cách 1 thay vào đó phải dùng cách 2

// Phương thức bind giúp chúng ta có thể sử dụng kĩ thuật mượn hàm
// Mượn hàm có nghĩa là chúng ta từ 1 đối tượng không có phương thức đấy bạn có thể mượn phương thức từ đối tượng có

const person2 = {
    firstName: "Bob",
}

const greetBob = person1.greet.bind(person2);
greetBob("Hello");
//Đây là 1 kĩ thuật rất quan trọng

// Bình thường không dùng bind muốn xác định this thì sẽ quan sát đến cách hàm được gọi nhưng khi đã dùng bind thì chỉ cần quan tâm bind thôi. Với vd trên gọi hàm thế nào đi nữa thì cũng ra John thôi.

// Hàm mũi tên với bind sẽ không có tác dụng vì không có riêng nó. 

/*
Phương thức bind rất hữu ích khi bạn cần một hàm luôn được gọi với cùng một giá trị của this, đặc biệt trong các trường hợp như:

Chỉ định rõ ràng ngữ cảnh this cho hàm.
“Mượn” các phương thức từ đối tượng khác.
Ưu điểm:
    Dễ dàng kiểm soát ngữ cảnh this của hàm.
    Giảm thiểu lỗi liên quan đến ngữ cảnh this.
*/

// Phương thức call là gì?
// Tương tự như bind ở điểm chỉ định ngữ cảnh this, call khác bind ở điểm thay vì trả về một hàm mới thì call sẽ thực hiện gọi hàm ngay.

// Syntax:
// myFunction.call(thisArg, [, arg1[, arg2[, ...]]]);

function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.firstName}${punctuation}`);
}

const person3 = { firstName: 'John' };

introduce.call(person3, 'Hello', '!');


// Phương thức apply là gì?
// Tương tự như 'call', điểm khác là 'apply' nhận các đối số dưới dạng một mảng.

// Cú pháp:
// myFunction.apply(thisArg, [argsArray]);

// Mỗi phần tử trong mảng tương ứng với 1 tham số
// apply cung cấp cho chúng ta 1 cách sử dụng khác

// Ex:

function introduce(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.firstName}${punctuation}`);
}

const person4 = { firstName: 'John' };
const array = ["Hi", "."]; // vd có 1 mảng

introduce.apply(person4, ['Hi', '.']);

introduce.apply(person4, array);

// Sử dụng apply khi ta cần các phần tử của mảng trở thành đối số của 1 hàm khác

// Ex: tính sum

function sum(a , b , c) {
    return a + b + c;
}

const numbers = [1 , 2 , 3];

const result = sum.apply(null , numbers); 
// lí do để null vì trong tình huống này không nhất thiết phải bind 1 đối tượng nào cả. Vì mục đích của ta lúc này không phải là để bind this mà để truyền 1 đối số cho hàm

console.log(result);

/* Tổng kết
- Phương thức bind():
    + Không gọi hàm, copy ra hàm mới, bind sẵn các giá trị cho các tham số của hàm.
- Phương thức call():
    + Gọi hàm ngay, truyền đối số cách nhau bằng dấu ','.
- Phương thức apply():
    + Gọi hàm ngay, truyền đối số dưới dạng 1 mảng.
- Cả 3:
    + Đều chỉ định "this" sẽ tham chiếu về đối tượng cụ thể.
    + Đều không sử dụng được với Arrow Function.
*/
