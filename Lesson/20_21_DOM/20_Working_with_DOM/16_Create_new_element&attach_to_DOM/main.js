// Để tạo ra phần tử mới sử dụng document.createElement()

const div = document.createElement("div");

// thêm thẻ html vào trong div
div.innerHTML = "<h1>Hello World</h1>";

console.log(div); // <div></div>

// - Nhưng lúc này vẫn chưa hiện ra trên giao diện, vì ta mới chỉ tạo ra và phần tử này chưa nằm trong DOM, và nếu muốn hiện lên giao diện thì phải thêm vào DOM

// - Để thêm vào DOM thì có cách sau:

// + Thêm vào 1 phần tử đang có sẵn trong DOM

// Ex: Thêm vào body

// Các cách lấy ra body
// const body = document.getElementsByTagName("body")[0];
// const body = document.querySelector("body");
const body = document.body; // hàm thiết kế sẵn

// Thêm vào
// body.appendChild(div);
// Hàm này sẽ thêm vào cuối cùng của thẻ được chọn

// ------------------------------------------------------------------
const parent = document.querySelector("#parent");
parent.appendChild(div);
// ------------------------------------------------------------------

// Khi thêm vào rồi và muốn xoá khỏi DOM thì dùng .removeChild()
parent.removeChild(div);

// Vậy thì vì sao cần phải dùng cách này để thêm thẻ html ta có thể hoàn toàn dùng innerHTML rồi thêm như bình thường
// 1 trong những vấn đề quan trọng nhất là bảo mật, nếu dùng innerHTML thì gặp vấn đề bảo mật dễ hơn, bảo mật XSS
