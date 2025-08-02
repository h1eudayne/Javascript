//Built-in Constructor

//String, Number, Boolean, Array, Object, Function, ...

// - String(x), Number(x), Boolean(x): Ép kiểu
// - Array, Object: Làm việc với array, object
//      - Array.isArray(x) , x instanceof Array , .....
//      - Object.assign(x,y) , Object.keys(x) , Object.values(x) ,....
// - Function: Tạo hàm động (Tạo hàm từ chuỗi)

// - null, undefined : Không có hàm tương ứng
// - BigInt, Symbol : Có hàm nhưng không phải constructor không dùng được *new*


// Khi dùng từ khóa *new* sẽ trả về đối tượng
let str = new String("Hello");

console.log(str);

let funcObj = new Function("a", "b", "return a + b");
console.log(typeof funcObj); // function
