// * String.prototype.padStart()

// - Đệm thêm chuỗi trước chuỗi gốc

// - Syntax:
// String.padstart(maxLength, fillString);
// maxLength: độ dài của kết quả mình muốn nhận được
// fillString: chuỗi sẽ được đệm vào, nếu chuỗi gốc không đạt độ dài tối thiểu thì sẽ lặp lại đến khi nào đủ maxLength thì tự dừng và trả về

// - Ex:

let str = "A";

console.log(str.padStart(5, "0")); // 0000A
console.log(str.padStart(5)); //      A
console.log(str.padStart(5, "012345")); // 0123A


// - Nếu chuỗi gốc nhiều kí tự hơn maxLength thì sẽ trả về chuỗi gốc
// - pad không cắt bỏ giá trị mặc định mà có cắt bỏ giá trị truyền vào
// - fillString sẽ không bắt buộc nếu không truyền thì sẽ là 1 dấu cách " "

//-----------------------------------------------------------------------------------------

// * String.prototype.padEnd()
    
// - Tương tự padStart() nhưng thêm vào phía sau

// - Đệm thêm chuỗi sau chuỗi gốc

//-----------------------------------------------------------------------------------------


// padStart()
// - Ex : 06:05
// + Nếu dưới 10 thì các số tự nhiên thêm phía trước số 0

let minutes = 6;
let second = 5;

minutes = `${minutes}`.padStart(2, "0");
second = `${second}`.padStart(2, "0");

console.log(`${minutes}:${second}`);

// - Ex:
// + Thẻ ngân hàng

let cardNum = "000034987982039847";

console.log(cardNum.slice(-4).padStart(cardNum.length, "x"));

// padEnd()
// - Ex: nếu các chuỗi mà không đủ 30 kí tự thì sẽ có các dấu chấm ở phía sau

let greeting = "Xin chào các bạn";

console.log(greeting.padEnd(30, "."));


