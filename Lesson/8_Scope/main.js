// * Phạm vi (Scope)
// - Phạm vi là khu vực trong code nơi một biến có thể được truy cập và sử dụng. Hiểu về phạm vi bạn có thể phân biệt rõ ràng một biến hoặc hàm có thể truy cập và sử dụng ở những nơi nào trong code.

// - Phạm vi toàn cục (Global scope)
// + Một biến được khai báo ở ngoài mọi hàm và block (khối code) là một biến toàn cục. Nó có thể được truy cập và sử dụng từ bất kỳ đâu trong code, kể cả bên trong các hàm.

// - Ví dụ:

let globalVar1 = "Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!";

// Truy cập biến toàn cục từ bên ngoài hàm
console.log(globalVar1); // Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!

function checkGlobalVar() {
  // Truy cập được biến toàn cục từ bên trong hàm
  console.log(globalVar1); // Tôi là cây toàn cục, nhìn thấy tôi từ mọi nơi!
}

checkGlobalVar();

// + Như là bầu trời xanh mênh mông, biến toàn cục là những biến được khai báo bên ngoài bất kỳ hàm và block nào, tự do và có thể truy cập từ mọi nơi.

// - Phạm vi hàm (Function scope)
// + Trong JavaScript, mỗi hàm tạo ra một phạm vi mới. Các biến được khai báo trong hàm (bao gồm cả các tham số của hàm) chỉ có thể được truy cập trong phạm vi của hàm đó.

// - Ví dụ:

function funcGarden() {
  let localVar = "Tôi là cây cục bộ, chỉ nhìn thấy tôi trong phòng này!";
  console.log(localVar); // Tôi là cây cục bộ, chỉ nhìn thấy tôi trong phòng này!
}

funcGarden();

// console.log(localVar); // Uncaught ReferenceError: localVar is not defined

// + Trong trường hợp các hàm lồng nhau: hàm con có thể truy cập và sử dụng các biến được khai báo ở các hàm cha, nhưng ở hàm cha sẽ không truy cập và sử dụng được các biến được khai báo trong hàm con.

// Ví dụ:

let globalVar = "Biến toàn cục";

function outerFunction() {
  let outerVar = "Biến ngoài";

  function innerFunction() {
    let innerVar = "Biến trong";

    console.log(innerVar); // Biến trong
    console.log(outerVar); // Biến ngoài
    console.log(globalVar); // Biến toàn cục
  }

  innerFunction();

  console.log(outerVar); // Biến ngoài
  // console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
}

outerFunction();

console.log(globalVar); // Biến toàn cục
// console.log(outerVar); // Uncaught ReferenceError: outerVar is not defined

// + Giống như một căn phòng kín đáo, biến cục bộ chỉ tồn tại và truy cập được bên trong hàm mà nó được khai báo.

// - Phạm vi khối (Block scope)

// + Phạm vi khối có nghĩa là các biến được khai báo bên trong một khối code (thường là bên trong các dấu ngoặc nhọn {}) chỉ có thể truy cập được bên trong khối code đó.

// + Ví dụ:

if (true) {
  let blockScopedVar = "Tôi chỉ tồn tại trong khối if này";
  console.log(blockScopedVar); // Tôi chỉ tồn tại trong khối if này
}

// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

// + Trường hợp sử dụng cú pháp rút gọn của if-else (không sử dụng ngoặc nhọn {}) thì mỗi nhánh của if-else vẫn là một khối code.

// + Ví dụ:

if (true) {
  //   let blockScopedVar = "Tôi chỉ tồn tại trong khối if này";
}

// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

// + Thậm chí bạn có thể sử dụng độc lập một cặp ngoặc nhọn {} để tạo ra một phạm vi khối.

// + Ví dụ:

{
  let blockScopedVar = "Tôi chỉ tồn tại trong khối này";
  console.log(blockScopedVar); // Tôi chỉ tồn tại trong khối này
}

// console.log(blockScopedVar); // Uncaught ReferenceError: blockScopedVar is not defined

// + Trước ES6 (2015) JavaScript chỉ có 2 phạm vi là Global scope và Function scope. ES6 cung cấp thêm hai từ khóa let và const cho phép tạo biến có phạm vi khối, các biến được khai báo bên trong một khối {} sẽ không thể được truy cập từ bên ngoài khối.

// - Phạm vi module (Module scope)

// + Trong một module, biến, hàm, hoặc các thành phần khác mà bạn khai báo chỉ có thể truy cập và sử dụng trong chính module đó, trừ khi chúng được export để sử dụng ở nơi khác.

// + Để sử dụng modules trong trang web của bạn, thêm thuộc tính type="module" vào thẻ script trong HTML.

// + Ví dụ:

// <script type="module" src="main.js"></script>
// Export các giá trị từ một module khác:

// File: myModule.js
// export const myVar = 1;
// export function myFunction() {
//   console.log("Hello world");
// }

// + Import và sử dụng các giá trị được export:

// File: main.js
import { myVar, myFunction } from "./myModule.js";

console.log(myVar); // 1
myFunction(); // Hello world

// + Sử dụng modules giúp bạn tổ chức mã nguồn một cách hiệu quả, tách biệt logic và tái sử dụng mã giữa các file và dự án khác nhau.

// + Phạm vi module xuất hiện khi bạn sử dụng ES6 Modules.

// * Lưu ý quan trọng

// - Mỗi hàm sẽ tạo ra một phạm vi mới

// + Trong JavaScript, mỗi hàm tạo ra một phạm vi mới. Các biến được khai báo trong hàm (bao gồm cả các tham số của hàm) chỉ có thể được truy cập trong phạm vi của hàm đó.

//  + Ví dụ:

// (1) Phạm vi toàn cục

function hamCha() {
  // (2) Phạm vi của hamCha

  function hamCon() {
    // (3) Phạm vi của hamCon
  }
}

// + Mỗi hàm sẽ tạo ra một phạm vi mới. Trong hàm con có thể truy cập và sử dụng các biến được khai báo ở các hàm cha, nhưng ở hàm cha sẽ không truy cập và sử dụng được các biến được khai báo trong hàm con.

// - Cách JavaScript tìm kiếm biến (Scope chain)

// + Scope Chain là chuỗi các phạm vi lồng nhau, nơi mỗi phạm vi có thể truy cập biến từ phạm vi bên ngoài của nó.

// + Khi một biến được truy cập, JavaScript sẽ tìm kiếm biến đó trong phạm vi hiện tại. Nếu không tìm thấy, nó sẽ tìm trong phạm vi ngoại cục tiếp theo và tiếp tục quá trình này cho đến khi tìm thấy biến hoặc đến phạm vi toàn cục.

// + Ví dụ:

// (3) Tìm thấy biến myVar
let myVar1 = "Hello, tôi ở đây!"; // Biến toàn cục

function hamCha1() {
  // (2) Tìm biến myVar trong phạm vi hamCha
  // Kết quả: không thấy => Tiếp tục tìm kiếm phạm vi ngoại cục

  function hamCon() {
    // (1) Tìm biến myVar trong phạm vi hamCon
    // Kết quả: không thấy => Tiếp tục tìm kiếm phạm vi ngoại cục
    console.log(myVar1);
  }
  hamCon();
}

hamCha1();

// + Trong JavaScript, các biến khai báo ở phạm vi khác nhau dù đặt trùng tên vẫn hợp lệ, nó sẽ là các biến khác nhau và độc lập trong phạm vi của nó.

// - Hãy sử dụng let và const thay vì dùng var

// + Sử dụng let và const giúp hạn chế lỗi liên quan đến phạm vi. Vì let và const có phạm vi block, nên sẽ an toàn hơn về mặt phạm vi và giúp quản lý biến hiệu quả hơn.

// * Sai lầm thường gặp

// - Sử dụng biến toàn cục khi không thực sự cần thiết

// + Sử dụng biến toàn cục cho mọi trường hợp, kể cả khi không cần thiết làm tăng khả năng xung đột (giữa tên biến và tên hàm), dễ gây ra các lỗi không mong muốn và khó khăn trong quản lý dữ liệu trong chương trình.

// - Hiểu nhầm về phạm vi của var, let, const

// + Sử dụng var thay vì let hoặc const trong các block, dẫn đến việc biến có phạm vi rộng hơn so với mong muốn.

// - Ví dụ:

if (true) {
  var x = "Tôi là biến var";
}

// Vẫn truy cập được x, dù nó nằm trong block if
console.log(x); // Tôi là biến var

// + Hậu quả: Biến x có phạm vi toàn cục, không giới hạn trong block if.

// - Không hiểu rõ phạm vi hàm

// + Sử dụng biến khai báo trong một hàm ở ngoài phạm vi hàm đó.

// - Ví dụ:

function myFunction1() {
  var y = "Tôi là biến cục bộ";
}
myFunction1();
// console.log(y); // Uncaught ReferenceError: y is not defined

// - Hậu quả: Gây lỗi không tìm thấy biến (ReferenceError) khi cố gắng truy cập biến cục bộ từ bên ngoài hàm.

// * Tóm tắt phạm vi và từ khóa khai báo

// - Bảng tóm tắt

// + Bảng này cung cấp một cái nhìn tổng quan về cách các từ khóa khai báo ảnh hưởng đến phạm vi của biến hoặc hàm trong JavaScript.

//|---------------|------|-----|--------|------------|
//| Loại phạm vi  | var  | let | const  |	function |
//|---------------|------|-----|--------|------------|
//| Global Scope  | ✔️  | ✔️  |  ✔️	  |     ✔️     |
//|---------------|------|-----|--------|------------|
//| Function Scope| ✔️  | ✔️  |  ✔️	  |     ✔️     |
//|---------------|------|-----|--------|------------|
//| Block Scope	  | ❌  | ✔️  |  ✔️   |	   ❌*    |
//|---------------|------|-----|--------|------------|
//| Module Scope  | ✔️  | ✔️  |  ✔️   |     ✔️     |
//|---------------|------|-----|--------|------------|

// * Trong Module, function cũng có phạm vi khối.

// - Yếu tố cốt lõi

// + Phụ thuộc vào nơi được khai báo:

// + Phạm vi của biến hoặc hàm phụ thuộc vào nơi chúng được khai báo trong code.

// + Phụ thuộc vào tính chất của từ khóa khai báo:

// + Cách biến hoặc hàm được quản lý phụ thuộc vào từ khóa được sử dụng để khai báo (var, let, const, function).
