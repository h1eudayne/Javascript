function Character(name) {
    this.name = name;
}

function Person(name) {
    this.name = name;
}

Character.prototype.sayHi = function () {
    console.log(`Hello, my name is ${this.name}`);
}

console.log(Character.prototype);
/*
    {sayHI: f}
*/ 

console.log(Character.prototype.constructor);
/*
f Character(name) {
    this.name = name;
} 
*/
console.log(Character.prototype.constructor === Character); // true

console.log(Character);
/*
f Character(name) {
    this.name = name;
} 
*/

console.dir(Character); // ƒ Character(name)

// Bởi vì các đối tượng được tạo bởi hàm tạo sau này ví dụ như tom, sẽ được kế thừa thuộc tính, phương thức nằm ở trong prototype. Thế nên việc có sẵn 1 constructor tham chiếu về chính hàm tạo bên trong phần prototype, nó giúp cho các đối tượng sau này được tạo ra bởi hàm tạo này sẽ được kế thừa lại prototype này và vị vậy nó sẽ được kế thừa luôn constructor này. Nhờ có constructor tham chiếu về chính hàm tạo nên có thể từ một đối tượng được tạo ra rồi có thểm kiểm tra xem nó được tạo bởi hàm tạo nào

/*
ƒ Character(name)
    arguments: null
    caller: null
    length: 1
    name: "Character"
    prototype: 
        sayHi: ƒ ()
        constructor: ƒ Character(name
        [[Prototype]]: Object
        [[FunctionLocation]]: main.js:1
        [[Prototype]]: ƒ ()
        [[Scopes]]: Scopes[2]
*/

//Ex
const tom = new Character("Tom");

tom.sayHi();

if(tom.__proto__.constructor === Character) {
    console.log(`Duoc tao ra tu Character`); // Duoc tao ra tu Character
}

// 1 cách khác kiểm tra xem object có được tạo ra bởi character đó không

if(tom instanceof Character) {
    console.log(`Duoc tao ra tu Character`); // Duoc tao ra tu Character
}

// 2 cách này khác nhau chứ không giống nhau

console.log(tom); // Character {name : 'Tom'};

console.log(tom.__proto__); // {sayHi: f}

console.log(tom.__proto__ === Character.prototype);//true

// Prototype chain

// Lớp cha lớn nhất của Object
// Các object cuối cùng đều kế thừa object này
console.log(Object.prototype);


//EX

// Object literal
const person1 = {
    name : "John"
};
console.log("----------------------------------");

console.log(person1);
console.log(person1.__proto__ === Object.prototype);// True
// Cũng kế thừa từ lớp cha lớn nhất Object.prototype

// Các object được khởi tạo từ hàm tạo, trước tiên là được kế thừa từ hàm tạo .protoype

// Ex: Object Number

console.log("--------------------------------------------");


console.log(Number.prototype);

const obj = new Number(999);

console.log(obj.__proto__ === Number.prototype); // true

console.log(obj.__proto__.__proto__ === Object.prototype); // true

console.log("--------------------------------------------");


// Object được tạo ra bởi hàm tạo của js (ex Number, String, Boolean,...) trước tiên sẽ kế thừa hàm tạo của nó .prototype rồi sau đó mới kế thừa tới lớp cha lớn nhất của Object (Object.prototype)

// Mọi hàm tạo đều kế thừa tới chính hàm khởi tạo của js(function, array , ....) rồi mới tới lớp cha lớn nhất của Object (Object.prototype)
// Ngoại trừ Object , Object sẽ kế thừa trực tiếp tới Object.prototype luôn

// Object.create(null); là một object thuần khiết và không kế thừa tới lớp cha lớn nhất của Object (Object.prototype)

const person2 = Object.create(null);
console.log(person2);

//instanceof và === khác gì nhau
function Person(name) {
    this.name = name;
}

const john = new Person("John");

console.log(john.__proto__.constructor === Person);
// Cách này kiểm tra với mục đích chắc chắn rằng john có được khởi tạo từ Person hay không
// a->b->c
// c dung la hoc tro cua b nhung khong phai hoc tro cua a
console.log(john instanceof Person);
// Còn cách instanceof khác ở chỗ , nó chỉ cần đúng trong chuỗi kế thừa của nó thôi là nó đã trả về true rồi. Nghĩa là john không nhất thiết phải được khởi tạo trực tiếp từ Person mà chỉ cần trong chuỗi kế thừa phía sau đấy mà có Person là đã đúng r.
// a->b->c
// c dung la hoc tro cua b va cung la hoc tro cua a

//Ex

const obj1 = new String("Hello");

console.log(obj1.__proto__.constructor === Object); // false
console.log(obj1 instanceof String); // true
console.log(obj1 instanceof Object); // true

// Từ 1 object có thể truy cập prototype thông qua cú pháp __proto__

const num = new Number(123);

console.log(num.__proto__);
// Nhưng cách này ngày nay không còn được tiêu chuẩn hóa nữa

// Cách được tiêu chuẩn hóa
console.log(Object.getPrototypeOf(num));