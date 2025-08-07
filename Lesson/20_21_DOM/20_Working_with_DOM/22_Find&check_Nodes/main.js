// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// matches
// closest
// contains

// - Các phương thức này dùng để lấy ra các phần tử theo cấp độ cha con

// -----------------------------------------------------

const box1 = document.querySelector("#box-1");

console.log(box1.querySelectorAll("div")); // sẽ trả ra tất cả div nhưng chỉ div nào là con của box-1 thôi

// * Lưu ý: khi gọi các phương thức này trên element sẽ không dùng được getElementById bởi vì không tồn tại phần tử này ở trên element

// * Lưu ý: chỉ cần là còn của nó không quan trọng là nằm sâu trong bao nhiêu thẻ vẫn có thể lấy ra được

// -----------------------------------------------------

// * matches : kiểm tra xem 1 phần tử có khớp với 1 css selector hay không

//    <div id="box-1">

console.log(box1.matches("[id]")); // true
console.log(box1.matches("[id='box-1']")); // true
console.log(box1.matches("[id='box-2']")); // false
console.log(box1.matches("#box-1")); // true
console.log(box1.matches("#box-2")); // false
console.log(box1.matches("div[id='box-1']")); // true

// -----------------------------------------------------

// * closest : sẽ tìm ra thẻ cha gần nhất theo css selector, và nó bao gồm cả chính nó
// - Khi dùng closest nó sẽ đứng ngay trên phần tử mà chúng ta gọi phương thức nó sẽ kiểm tra xem trên phần tử đó có khớp với css selector đó không , nếu khớp nó sẽ trả về luôn

console.log(box1.closest("div[id='box-1']")); // <div id="box-1">…</div>
// sẽ trả về chính box-1 vì nó khớp vs css selector trên

console.log(box1.closest("body")); // body
// Khi gọi thẻ body bằng thẻ box1 closest xem và box1 không phải là body nên sẽ nhảy ra lớp cha để kiểm tra và thẻ body khớp với body và trả về luôn
console.log(box1.closest("html")); // html
// html cũng tương tự

// -----------------------------------------------------

// * contains : giúp ta kiểm tra xem 1 element có chứa 1 node khác hay không, tức là có chứa 1 element, 1 text hay là 1 comment node khác hay không

/*
    <div id="box-1">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
*/

// const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");

const item = box1.querySelector(".item");

console.log(box1.contains(item)); // true
console.log(box2.contains(item)); // false

// Ex: bây giờ ta có 1 thẻ h1 kiểm tra xem thẻ h1 này được gắn vào body hay chưa

// chưa append vào body
const h1 = document.createElement("h1");
h1.textContent = "Hello World";
console.log(document.body.contains(h1)); // false

// append vào body
document.body.append(h1);
console.log(document.body.contains(h1)); // true
