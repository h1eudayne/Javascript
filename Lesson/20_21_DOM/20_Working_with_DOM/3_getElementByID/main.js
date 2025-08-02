// document.getElementById("elementId");

const h1 = document.getElementById("title");

// Với trường hợp có 2 id trùng tên thì sẽ lấy id đầu tiên

console.log(h1.innerText = "Hello World!");

if(h1) {
    console.log("Có phần tử với id là title");
}
// Đây cũng là cách kiểm tra xem có nhập đúng id hay không
// Nên kiểm tra phần tử có tồn tại hay không trước khi truy cập vào nó

// Khi chúng ta đặt id cho thẻ html thì id sẽ tạo thành 1 biến và biến đó chính là phần tử của thẻ đó ở trong DOM

console.log(title); // <h1 id="heading">Hello Hiếu</h1>

// Bạn có thể log thẳng title ra mà không cần phải dùng document.getElementById("title") nữa

// * Lưu ý: Chỉ tác dụng với id, không tác dụng với class hay các thuộc tính khác

// Nhưng không nên sử dụng biến này để truy cập, nên sử dụng document.getElementById("title") để truy cập phần tử trong DOM