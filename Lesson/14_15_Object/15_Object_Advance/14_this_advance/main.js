// Context - Ngữ cảnh
// "Đối tượng tại nơi đoạn mã đang được thực thi", được xác định bởi từ khoá "this"
// Nghĩa là khi nói tới ngữ cảnh cái ta quan tâm là tại nơi chúng ta đang chạy đoạn code đấy thì từ khoá this tham chiếu đến đối tượng nào.
// - Global context (Ngữ cảnh toàn cục)
// - Function context (Ngữ cảnh hàm)

// Scope - Phạm vi
// "Khả năng truy cập" tới biến, hàm , ... trong đoạn mã
// - Global scope (Phạm vi toàn cục)
// - Function scope (Phạm vi hàm)

//-----------------------------------------------------------------------------------------------

// Global Context (Ngữ cảnh toàn cục)

// * Trong ngữ cảnh toàn cục (ngoài bất kỳ hàm nào), this trỏ tới đối tượng toàn cục (global object). Trong trình duyệt web, đối tượng này là window; trong NodeJS, đối tượng này là global.

console.log(this);
//[object Window]

// Tại ngữ cảnh toàn cục trên trình duyệt web thì this tham chiếu đến đối tượng window

//-----------------------------------------------------------------------------------------------

//Function Context (Ngữ cảnh hàm)
// Trong một hàm thông thường, giá trị của this phụ thuộc vào cách mà hàm được gọi.

// - Hàm được gọi thông thường
// * Khi một hàm được gọi như một hàm thông thường (không phải phương thức của đối tượng), this trỏ tới đối tượng toàn cục (hoặc undefined trong Strict Mode).

// Ex:
function showThis() {
    console.log(this);
}

showThis(); // hàm được gọi theo cách thông thường

// Khi gọi hàm không thông qua 1 đối tượng (gọi hàm theo cách thông thường), thì lúc này "this" sẽ tham chiếu về đối tượng toàn cục, và trên trình duyệt web là "window"

// Gọi hàm theo cách thông thường(trong Strict Mode) 
// Trong Strict Mode:

// Là chế độ nghiêm ngặt của js
// * Gọi hàm theo cách thông thường nhưng ở trong "Strict Mode"(Chế độ nghiêm ngặt của js), thì lúc này "this" tham chiếu tới undefined

// Để sử dụng chế độ nghiêm ngặt thì khai báo ở đầu file hoặc đầu hàm 'use strict';
// Khi khai báo ở đầu file thì toàn bộ code ở trong file đó sẽ chạy trong chế độ nghiêm ngặt
// Còn nều khai báo ở đầu 1 hàm, thì code ở hàm này sẽ chạy chế độ nghiêm ngặt
// Đây là chế độ giúp viết code js sn toàn và tránh 1 số lỗi.
'use strict';

function showThis() {
    'use strict'; // khai báo ở đầu hàm
    console.log(this);
}

showThis();

/*
 {
    "name": "John"
}
    */

// - Phương thức của đối tượng
// * Khi gọi  phương thức thông qua một đối tượng thì "this" ở trong phương thức đó sẽ trở tới đối tượng mà ta gọi phương thức (trỏ tới đối tượng mà nó thuộc về).
// Trường hợp này trong chế độ nghiêm ngặt cũng y vậy không phải undefined
const person = {
    name: 'John',
    showThis: function() {
        console.log(this); //console.log(person);
    }
};

showThis();
// John

//-----------------------------------------------------------------------------------------------

// Constructor Functions (Hàm khởi tạo)
// Khi một hàm khởi tạo (constructor function) được gọi với từ khóa new, this trỏ tới đối tượng mới được tạo ra.

function Person(name) {
    this.name = name;
    this.showThis = function() {
        console.log(this);
    }
}

const person1 = new Person('John');

console.log(person1.name);
person1.showThis();

/* 
{
    "name": "John"
}
*/

//-----------------------------------------------------------------------------------------------

// Arrow Functions (Hàm mũi tên)

// Hàm mũi tên không có this của riêng nó, và hàm mũi tên không dựa vào các yếu tố bên trên để xác định this, mà sẽ dựa vào nơi mà hàm mũi tên được khai báo để chúng ta xác định this. Bởi vì hàm mũi tên sẽ được kế thừa this từ phạm vi mà nó được định nghĩa
const person2 = {
    name: 'John',
    showThis: function() {
        // this ở đây là person
        const innerFunction = () => {
            console.log(this);
        };
        innerFunction();
    }
};

person2.showThis();

const person3 = {
    name: "John",
    showThis: () => {
        console.log(this);
    }
};

person3.showThis();

/*
{
    "name": "John"
}
     */