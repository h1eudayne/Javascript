const h1 = document.createElement("h1");
const text = document.createTextNode("Hello");
const comment = document.createComment("Comment");
const title = document.createAttribute("title");
const fragment = document.createDocumentFragment();

// --------------------------------------------------------------

console.log(h1.nodeName); // H1
// nodeName là tên của node

console.log(h1.nodeType); // 1
// nodeType là kiểu hay là loại của node
// và sẽ trả về kiểu số(int)

console.log(text.nodeName); // #text
console.log(text.nodeType); // 3

console.log(comment.nodeName); // #comment
console.log(comment.nodeType); // 8

console.log(title.nodeName); // title
console.log(title.nodeType); // 2

console.log(fragment.nodeName); // #document-fragment
console.log(fragment.nodeType); // 11

// --------------------------------------------------------------

// Các số của hàm nodeType được tạo sẵn, là thuộc tính của hàm tạo tên là Node

// Ex: so sánh text có phải là loại Text Node hay không
console.log(text.nodeType === Node.TEXT_NODE); // true
// các kiểu còn lại tương tự
