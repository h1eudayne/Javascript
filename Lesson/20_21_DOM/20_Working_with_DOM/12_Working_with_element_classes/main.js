// Thêm class underline vào trong thẻ h1

const heading = document.querySelector("#heading");
console.log(heading);

// -------------------------------------------------------------------

// heading.className = "underline";
// console.log(heading.className); // .underline
// Nếu làm như vậy các class có sẵn sẽ bị thay thế

// -------------------------------------------------------------------

// Có thể làm theo cách giữ lại class đang có và thêm class mới vào
heading.className = `${heading.className} underline`;
console.log(heading.className); // red italic underline
// Làm như này cũng được nhưng bị thủ công quá

// -------------------------------------------------------------------

// Kiểm tra xem trong heading có class italic không

console.log(heading.className.includes("italic")); // true
// Nhưng làm theo cách này nếu không có italic mà có abcitalicxyz cũng sẽ trả về true

console.log(heading.className.split(" ").includes("italic")); // dùng split để tách các class dựa vào " " khoảng trắng để chuyển thành mảng và kiểm tra xem có mảng nào tên italic không , lúc này sẽ trả về false đúng như mong đợi
// Cách này cũng được nhưng phức tạp

// -------------------------------------------------------------------

// Để làm các bài toán trên 1 cách đơn giản hơn thì ta có phương thức "classList"

// add, contains, replace, remove, replace, toggle

// add : thêm class mới
heading.classList.add("underline", "class2", "classN");

// contains: kiểm tra xem sự tồn tại của 1 class trong phần tử
console.log(heading.classList.contains("italic")); // true
// lúc này sẽ thỏa như những gì ta mong muốn mà không cần làm phức tạp như ở trên

// replace: thay thế
heading.classList.replace("red", "underline");
// nếu "red" không tồn tại trong phần tử sẽ không thay thế

// toggle: nếu có class thì sẽ xóa đi còn không có class thì sẽ thêm class vào
heading.classList.toggle("red"); // thêm vào
heading.classList.toggle("red"); // xóa đi
heading.classList.toggle("red"); // thêm vào

// toggle có phần tử thứ 2 là kiểu boolean , dùng để ép buộc thêm vào hay xóa đi, true là thêm vào và false là xóa đi
heading.classList.toggle("red", true); // thêm vào
heading.classList.toggle("red", true); // thêm vào

// Vậy khi muốn thêm vào hay xóa đi nên dùng toggle hay add, remove
// - Nếu mong muốn của bạn cụ thể là thêm vào hay xóa đi thì hãy dùng add và remove.
// - Còn dùng toggle sẽ không làm rõ được ý nghĩa là thêm hay xóa
// - Và toggle chỉ thêm hoặc xóa được 1 class thôi còn add và remove có thê tác động đến nhiều class 1 lúc
// - Dùng toggle khi 1 class phụ thuộc vào 1 kết quả

// -------------------------------------------------------------------

// Ex: Khi bấm vào button sẽ đổi thành chữ xanh và nhấn lần nữa sẽ thành chữ đỏ thay phiên nhau
const button = document.querySelector("#button");

button.onclick = function () {
  heading.classList.toggle("right");
};
