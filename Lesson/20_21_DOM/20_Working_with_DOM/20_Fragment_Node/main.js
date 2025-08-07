// Fragment

const box = document.querySelector("#box");
const heading = document.querySelector("#heading");

// Nodes
// Bây giờ ta muốn thêm 3 node này vào trước heading thì làm thế nào?
const text = document.createTextNode("Text....");
const comment = document.createComment("Something");
const p = document.createElement("p");
p.textContent = "Something text ......";

// * C1: insertBefore
// box.insertBefore(text, heading);
// box.insertBefore(comment, heading);
// box.insertBefore(p, heading);

// Cách này cũng được nhưng nếu ta có 20 - 100 node thì không thể làm như vậy được vừa không hiệu quả vừa dài dòng

// - Nếu bạn vẫn muốn làm theo cách này vẫn có cách

// + tạo ra 1 div và thêm các node này vào div đó rồi dùng insertBefore thêm div mới đó vào trước heading nhưng như thế sẽ dư div

// const container = document.createElement("div");
// container.append(text, comment, p);
// box.insertBefore(container, heading);

// + hoặc vẫn có thể dùng vòng lặp để thêm vào

// - Cơ bản vẫn có cách nhưng sẽ không hiệu quả trong js có hàm sẵn để làm nhiệm vụ này document.createDocumentFragment()

const container = document.createDocumentFragment();
container.append(text, comment, p);
box.insertBefore(container, heading);

// Với hàm createDocumentFragment() sẽ có kết quả như mong muốn mà không phải tạo ra div mới
