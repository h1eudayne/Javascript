const parent = document.querySelector("#parent");

// * Các cách tạo mới node

// - Element node
const h1 = document.createElement("h1");
h1.textContent = "Hello World";

h1.onclick = function () {
  console.log(Math.random());
};

parent.appendChild(h1);

// - Text node
const text = document.createTextNode("Text node");

// console.log(text); // sẽ trả về 1 object
// parent.appendChild(text);
// removeChild cũng có thể remove text node này

// - Comment node
const comment = document.createComment("Something");

// console.log(comment); // sẽ trả về 1 object
// parent.appendChild(comment); // comment nên sẽ không hiện ra giao diện

// - Attribute node
// + Sẽ khác với các node khác text node, comment node, element node đều có thể làm con của các node khác nhưng attribute node không phải là con mà sẽ là thuộc tính thẻ luôn chứ không phải nằm ở giữa thẻ

// const title = document.createAttribute("title");

// console.log(title); // chưa có value và trả về 1 object

// title.value = "Helo HiHi";
// console.log();

// console.log(title); // title="Helo HiHi"

// Vì không phải là nội dung nên có phương thức riêng để đưa attribute vào 1 thẻ
// dùng setAttributeNode

// parent.setAttributeNode(title);

//--------------------------------------------------------------------------------

// * Element node được dùng phổ biến hơn các cách còn lại
// Với việc thêm text vào phần tử nên dùng innerText hoặc textContent
// Còn comment thì nên comment khi code html

//--------------------------------------------------------------------------------

// * Tìm hiểu các phương thức mới:
// - append(), insertBefore(), replaceChild(), cloneNode() các phương thức này sẽ làm việc được với text node, comment node, element node

// * append()
// - Khác biệt đầu tiên giữa append() và appendChild() là appendChild() chỉ thêm được 1 node 1 lần, còn append() có thể thêm nhiều node 1 lần
// parent.append(h1, text, comment, "Hello"); // nếu truyền vào 1 chuỗi sẽ tự chuyển về text node khác với appendChild() nếu chuyền chuỗi vào sẽ báo lỗi

// * insertBefore()
// - Chèn 1 node vào trước 1 node đang có
// parent.append(h1);
// parent.insertBefore(text, h1); // text là node muốn truyền vào, h1 là node mà bạn muốn node mới nằm trước nó

// * replaceChild()
// - Thay thế node khác
// parent.append(h1);
// parent.replaceChild(comment, h1); // h1 là node bạn muốn thay thế, comment là node sẽ thay thế vào node h1

// * cloneNode()
// - Sao chép node

// const newH1 = h1.cloneNode(); // clone nông
const newH1 = h1.cloneNode(true); // clone sâu

// - cloneNode() mặc định sẽ là clone nông, giả sử bên trong H1 có node con khác thì khi gọi cloneNode() thì chỉ clone đúng node h1 thôi còn con của h1 sẽ không clone
// - cloneNode() có thể truyền tham số(boolean) nếu là true thì sẽ là clone sâu, còn false hay không truyền mặc định là clone nông
// - cloneNode() cho dù là clone sâu cũng sẽ không clone các sự kiện vd "onclick" . Đây là 1 điểm lợi sau khi clone xong ta có thể set 1 event mới 

console.log(newH1);

newH1.onclick = function {
    console.log("New event");
    
}

parent.append(h1, newH1);
