const title = document.querySelector("#title");

console.log(title);

console.log(title.innerText);
console.log(title.textContent);


// Điểm giống đầu tiên là nếu có html ở bên trong cú pháp sẽ loại bỏ HTML

title.textContent = "<span>Hello World</span>";

// Điểm giống thứ 2 là nếu truyền vào thẻ html thì sẽ không tạo ra phần tử span mà sẽ đưa lên giao diện giống với innerText

// - Khác nhau

// Với innerText thì nó sẽ trim còn textContent sẽ show như những gì nội dung có bao gồm khoảng trắng hoặc enter xuống hàng

// Nếu nội dung text bên trong được bọc bằng 1 thẻ rồi thẻ này bị ẩn đi bởi css. Với cách ẩn là "display: none" innerText sẽ phản ánh những gì đang hiển thị "nghĩa là phần tử nào bị ẩn sẽ không hiện ra", còn textContent sẽ không bị ảnh hưởng gì hết. Còn ẩn theo cách "visibility: hidden", innerText thì nội dung ẩn vẫn sẽ ẩn nhưng chiếm không gian trên giao diện và console còn textContent y như ở trên.

// Nếu ẩn phần tử cha của phần tử đang chọn với cách ẩn là "display: none", thì sẽ hoạt động kiểu khác, giao diện sẽ ẩn hết đi nhưng lúc này innerText sẽ hoạt động giống textContent, giữ nguyên khoảng trắng và hiện thị hết nội dung. Còn ẩn theo cách "visibility: hidden", innerText sẽ ẩn giao diện và kết quả trả về cũng sẽ không có chữ luôn , trả về chuỗi rỗng, còn textContent vẫn y vậy

// * Lưu ý
// Dùng textContent khi cần giữ nguyên xuống hàng , còn nếu quan tâm đến nội dung text thì dùng innerText

