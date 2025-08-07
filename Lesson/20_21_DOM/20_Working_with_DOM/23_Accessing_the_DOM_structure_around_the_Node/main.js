// Fragment
const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

// Nodes
const text = document.createTextNode("Text....");
const comment = document.createComment("Something");
const p = document.createElement("p");
p.textContent = "Something text .....";

// Create fragments
const container = document.createDocumentFragment();

// text, comment , p => fragment
container.append(p, text, comment);

// fragment => box(before heading)

box.insertBefore(container, heading);  // để hiểu ví dụ cuối thì comment dòng này

// thêm fragment(container) vào bên trong box, và nằm trước heading

//--------------------------------------------------------------------------------------------------------------------------

// * childNodes : đứng từ 1 node cha , và lấy ra danh sách các node con trực tiếp
console.log(box.childNodes); // NodeList(6) [text, p, text, comment, h1#heading, text]

// ở trong list có text đầu và text cuối đó là khoảng trắng ở đầu và ở cuối của thẻ h1 , nếu xoá khoảng trắng đi sẽ có 4 node

// Lưu ý: chỉ trả về node con trực tiếp trong thẻ h1 có span và i nhưng vẫn chỉ trả về là 6 node

//--------------------------------------------------------------------------------------------------------------------------

// * children : Thường thì ta chỉ cần lấy element node như là p hay là h1 thôi, hiếm khi ta lấy text hay comment js có sẵn hàm children để làm việc này

console.log(box.children); // HTMLCollection(2) [p, h1#heading, heading: h1#heading]

//--------------------------------------------------------------------------------------------------------------------------

// - Đứng ở node cha và lấy ra node con đầu tiên và lấy ra node con cuối cùng

// Các node có trong box
/*
    {
        "0": p,
        "1": text,
        "2": comment,
        "3": h1#heading
    }
*/

// * firstChild : lấy ra node con đầu tiên
console.log(box.firstChild); // <p>Something text .....</p>

// * lastChild : lấy ra node con cuối cùng
console.log(box.lastChild); // <h1 id="heading"><span><i>Hello World</i></span></h1>

//--------------------------------------------------------------------------------------------------------------------------

// - Đứng ở node cha và lấy ra element con đầu tiên và lấy ra element con cuối cùng, sẽ bỏ qua các node không phải element như text hay comment,...

// * firstElementChild : lấy ra element con đầu tiên

console.log(box.firstElementChild); // <p>Something text .....</p>

// * lastElementChild : lấy ra element con đầu tiên

console.log(box.lastElementChild); // <h1 id="heading"><span><i>Hello World</i></span></h1>

//--------------------------------------------------------------------------------------------------------------------------

// * previousSibling : - Đứng từ 1 node và lấy được node đứng trước nó

console.log(text.previousSibling); // <p>Something text .....</p>

// * prviousElementSibling : - Đứng từ 1 node và lấy được element đứng trước nó

console.log(text.previousElementSibling); // <p>Something text .....</p>

// -------------

// * nextSibling : - Đứng từ 1 node và lấy được node đứng sau nó

console.log(text.nextSibling); // <!--Something-->

// * nextElementSibling : - Đứng từ 1 node và lấy được element đứng sau nó

console.log(text.nextElementSibling); // <h1 id="heading"><span><i>Hello World</i></span></h1>

//--------------------------------------------------------------------------------------------------------------------------

// * parentNode : trả về node cha của node đó, không nhẩt thiết phải là element
console.log(text.parentNode); // div#box

// * parentElement : trả về element cha của node đó, bắt buộc phải là element
console.log(text.parentElement); // div#box

// * nếu comment dòng box.insertBefore(container, heading); 

// container.append(p, text, comment); // không comment dòng này ở trên
// box.insertBefore(container, heading); // chỉ comment dòng này ở trên

// Lúc này text node đang là con của fragment(container)

// console.log(text.parentNode); sẽ trả ra #document-fragment

// console.log(text.parentElement); sẽ trả ra null vì p, text, comment lúcnày chưa đưa vào DOM thì cha của nó lúc này đang là fragment(container) nhưng fragment không phải là 1 Element, vì vậy lúc này không có Parent Element