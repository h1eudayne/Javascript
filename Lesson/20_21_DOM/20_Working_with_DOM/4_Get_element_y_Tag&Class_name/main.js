// document.getElementsByTagName()

// Khi nào mà chữ element không có "s" thì sẽ là lấy một phần tử duy nhất
// Còn khi có "s" thì sẽ là lấy tất cả các phần tử cùng tên thẻ và sẽ trả về một mảng

// Dùng để lấy tất cả các phần tử có cùng tên thẻ
const h2 = document.getElementsByTagName('h2');
console.log(h2);

// Sử dụng [] để truy cập vào phần tử cụ thể
console.log(h2[1].innerText = "Hieu day ne Tag Name");

// Nếu truyển vào tên thẻ không tồn tại thì sẽ trả về mảng rỗng
const h3 = document.getElementsByTagName('h3');
console.log(h3); // HTMLCollection[]

// document.getElementsByClassName()

// Cho dùng 1 thẻ có nhiều class, thì chỉ cần trong tất cả class đó có một class trùng với tên class cần lấy thì sẽ lấy được
const title = document.getElementsByClassName('title');
console.log(title);

// Sử dụng [] để truy cập vào phần tử cụ thể
console.log(title[0].innerText = "Hieu day ne Class Name");

// Nếu tên class không tồn tại thì sẽ trả về mảng rỗng
const title1 = document.getElementsByClassName('title1');
console.log(title1); // HTMLCollection[]
