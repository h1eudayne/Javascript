//Object.prototype.toString()
// Sẽ trả về thể hiện của obj dưới dạng chuỗi

//Object.prototype.valueOf()

// Sẽ trả về chính obj mà ta gọi nó

//Ex

const person = {
    name: "John",
};

console.log(person.valueOf());
console.log(person.toString()); //[object Object]

//Ex

// Ở các hàm tạo khác của js nó có định nghĩa lại phương thức valueOf và toString chính vì vậy 2 phương thức này đã ghi đè lại 2 phương thức này trong Object.prototype
// Cách hoạt động như sau :
// + valueOf() sẽ trả về giá trị nguyên thủy mà obj đang bao bọc
// + toString() sẽ trả về giá trị nguyên thủy được chuyển đổi sang dạng chuỗi

// Number, String, Boolean, BigInt, Symbol
const number = new Number(999);
console.log(number.valueOf()); // number
console.log(number.toString()); // string

// Array, Function
// Có ghi đè toString() nhưng không ghi đè valueOf()

//Array
const colors = ["red", "green", "blue"];

console.log(colors.toString()); // red,green,blue
//trả về 1 chuỗi nối các phần tử cách nhau bằng dấu phẩy , và không có khoản trắng
console.log(colors.valueOf()); // sẽ trả về chính mảng

//Function

const sum = function(a, b) {
    return a + b;
};

console.log(sum.toString()); 
/*
    ƒ (a, b) {
        return a + b;
    }
*/
// sẽ trả về 1 chuỗi thể hiện khai báo của function

console.log(sum.valueOf()); // sẽ trả về chính function

// Khi nào js tự gọi và cách gọi như thế nào?

const person1 = {
    name: "John",
};
console.log(person1 + "ABC");
// Khi chúng ta đưa 1 obj vào 1 biểu thức(là khi có toán tử) thì trước tiên js sẽ tự động gọi phương thước valueOf() trên đối tượng person. Và js thấy giá trị trả về không phải là nguyên thủy nên sau đó nó sẽ gọi toString() và nhận về [object Object]. Nên trong tình huống này vế trái sẽ là [object Object] và vế phải là ABC
// Suy ra kết quả là : [object Object]ABC

const number1 = new Number(999);
console.log(number + "ABC");

//Giống như ở trên trước mắt sẽ tự động gọi phương thức valueOf() trên đối tượng number và sẽ nhận về giá trị là kiểu nguyên thủy thế nên là vế trái của biểu thức là số 999 cộng với chuỗi ABC vì là chuỗi nên thực hiện ép kiểu rồi nối chuỗi. Nên kết quả là:
// 999ABC

// EX chứng minh
const obj = {
    valueOf() {
        console.log("valueOf");
    },
    toString() {
        console.log("toString");
        return "XYZ";
    }
}

// Không có toán tử nên sẽ tự động gọi toString luôn
console.log(`${obj}`);

console.log(`${obj + ""}`);

//Ex 2:
const obj2 = {
    valueOf() {
        console.log("valueOf");
        return {}; // ====> object  trả về giá trị không nguyên thuỷ
    },
    toString() {
        console.log("toString");
        return {}; // ====> object  trả về giá trị không nguyên thuỷ
        //     ^ đây là 1 object literal và nó sẽ kế thừa object prototype , nhưng nó không gọi valueOf và toString mặc định 1 lần nữa. Vì nó chỉ nỗ lực ép kiểu object sang chuỗi 1 lần thôi. Khi đã gọi toString nhưng vẫn trả về object nó sẽ không vào prototype để ép kiểu 1 lần nữa đâu.
        // ép kiểu thất bại
    }
    // toString chắc chắn sẽ trả về chuỗi nhưng do chúng ta đang chủ động ghi đè và ta sử dụng sai mục đích , toString chắc chắn sẽ trả ra chuỗi nhưng ta cố ý trả ra object thế nên là nỗ lực ép kiểu object sang chuỗi của js đã thất bại, bởi vì sau cùng đã gọi toString rồi mà nó vẫn không nhận được chuỗi. Nên là văng ra lỗi là không thể chuyển được object sang giá trị nguyên thuỷ.
}

// console.log(obj2 + "ABC"); // Lỗi ở dòng này
