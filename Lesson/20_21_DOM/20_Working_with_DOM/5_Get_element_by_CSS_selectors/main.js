// document.querySelector()

// Với querySelector thì sẽ lấy được một phần tử duy nhất
const result = document.querySelector("#heading");
console.log(result); // <h1 id="heading">Hello Hieu 1</h1>

// Nếu có nhiều phần tử cùng tên thì sẽ lấy phần tử đầu tiên
const result1 = document.querySelector(".title");
console.log(result1); // <h2 class="title">Hello Hieu 2</h2>

// document.querySelectorAll()
// Với querySelectorAll sẽ trả về 1 danh sách các phần tử tìm được

const results = document.querySelectorAll(".title");
console.log(results); // NodeList(2) [h2.title, h2.title]

// Nodelist gần giống như mảng, nhưng không giống hoàn toàn chỉ gần giống

// Muốn rõ ràng tường minh thì nên dùng getElementById, getElementsByClassName hoặc getElementsByTagName 

// Còn cách này thì ngắn gọn hơn, nhưng nhược điểm là không rõ ràng là chúng ta đang lấy phần tử nào tên thẻ hay là id hay là class nó chỉ có chúng ta biết là chúng ta truyền css selector vào thôi
// Nhưng lấy theo cách này có 1 ưu điểm là nó giúp các bạn chọn các phần tử theo điều kiện rất là phức tạp 

// Ex: lấy ra tất cả thẻ có class là title nhưng không chứa class abc
const results2 = document.querySelectorAll(".title:not(.abc)");
console.log(results2); // NodeList(1) [h3.title]

// Ex: lấy ra class title phía sau id heading nhưng lại không chứa class abc
const result2 = document.querySelectorAll("#heading ~ .title:not(.abc)");
console.log(result2); // NodeList(1) [h3.title]