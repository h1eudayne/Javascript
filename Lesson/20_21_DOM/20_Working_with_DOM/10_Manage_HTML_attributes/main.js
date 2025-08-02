// id, class, title, src, alt, href, target ...

// Sẽ không thêm được các phần tử mà thuộc tính đó không có, và không thể thêm các thuộc tính không tồn tại.
// Nếu dùng cách này thì sẽ không xóa thuộc tính đó được, nhưng có thể gán chuỗi rỗng
// Nếu dùng cách này để kiểm tra thẻ đó có thuộc tính này hay không sẽ không hiệu quả, trong trường hợp có 1 thuộc tính rỗng thì sẽ trả ra là không có
// Nếu đưa 1 đường dẫn nội bộ theo dạng tương đối (ex: abc.html), thì sẽ trả về dưới dạng tuyệt đối (http://127.0.../abc.html)

// Lấy ra

const h1 = document.querySelector("h1");
console.log(h1);

// Cách 1:
console.log("Cách 1");
console.log(h1.id);
console.log(h1.className);

// Cách 2:
console.log("Cách 2");
console.log(h1.getAttribute("id"));
console.log(h1.getAttribute("class"));

// Sửa

// Cách 1:
console.log("Cách 1");
h1.id = "something";
h1.className = "something-else class2 class 3";
h1.title = "Hello!";
h1.style = "color: red";

console.log(h1.id);
console.log(h1.className);

// Cách 2:
console.log("Cách 2");
h1.setAttribute("id", "something2");
h1.setAttribute("class", "test");
// h1.hidden = true;

console.log(h1.id);
console.log(h1.className);

//-------------------------------------------------------------------

//img

const img = document.querySelector("img");
img.src =
  "https://play-lh.googleusercontent.com/k6oMTA_KQWB5xzTsvlNdpXA6pFfEDG_0ZZfxf7J_1fn2dDOkEYKyRIJM2IHdnhQ2YNzb=w96";

//-------------------------------------------------------------------
//a

const a = document.querySelector("a");
a.href = "abc.html";
a.target = "_blank";

// Lấy ra
// Cách 1
console.log("Cách 1");
console.log(a.href);
// Cách 2
console.log("Cách 2");
console.log(a.getAttribute("href"));

// - Muốn chính xác như những gì nhập vào thì dùng cách 2

//--------------------------------hasAttribute()-----------------------------------
// Kiểm tra xem thẻ đó có thuộc tính đó hay không để hiệu quả thì dùng hasAttribute()
// Kể cả id là rỗng thì vẫn là true khác với cách trên
console.log('h1.hasAttribute("id") ' + h1.hasAttribute("id"));

//--------------------------------removeAttribute()-----------------------------------
// Xóa thuộc tính trong thẻ
h1.removeAttribute("class");

//--------------------------------setAttribute()-----------------------------------
// - Với cách này thì có thể thêm bất kì thuộc tính nào vào bất kì thẻ nào
// - Và những thuộc tính nào thên bằng setAttribute() thì phải dùng getAttribute() để lấy ra

//--------------------------------toggleAttribute()-----------------------------------
// - Sẽ kiểm tra xem phần tử đó có attribute đó hay không nếu có thì sẽ xoá bỏ đi, còn nếu không có thì sẽ thêm vào
const button = document.querySelector("button");

button.onclick = function () {
  h1.toggleAttribute("hidden");
};

// onclick có tác dụng là khi được click thì function sẽ chạy
