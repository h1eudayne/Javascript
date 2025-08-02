const h1 = document.querySelector("h1");
console.log(h1.title);

// - Attribute : dữ liệu khởi tạo cho phần tử
// + Attribute là thuộc tính của thẻ ex : "title="Hello" "
// + Là thuộc tính tính chất mang tính tĩnh

//--------------------------------------------------------------------------

// - Property : dữ liệu hiện tại của phần tử
// + Property là thuộc tính của của object ex : "h1.title"
// + Là thuộc tính tính chất mang tính động

//--------------------------------------------------------------------------

// - Giữa Property và Attribute có sự đồng bộ tức là khi sửa Property sẽ sửa Attribute, và ngược lại khi sửa Attribute sẽ sử Property, nhưng không phải trường hợp nào cũng vậy nhiều khi sửa 1 cái nhưng không ảnh hưởng cái còn lại

//--------------------------------------------------------------------------

// h1.title = "New Title"; // Ở vd này thay đổi Property sẽ ảnh hưởng đến Attribute
// - Lưu ý đây không phải là dòng code sửa Attribute. Attribute thay đổi vì đồng bộ thuộc tính từ Property

h1.setAttribute("title", "Something"); // Ở vd này thay đổi Attribute sẽ ảnh hưởng đến Property
console.log(h1.title); // Something
// - Đây là dòng code sửa Attribute và Property sẽ đồng bộ theo

// * Lưu ý:
// - Với những thuộc tính thể hiện dữ liệu trong form như dữ liệu nhập vào input, hoặc trạng thái check(radio, checkbox) sẽ không đồng bộ như chúng ta mong đợi

const email = document.querySelector("#email");
console.log(email);
console.log(email.value); // abc@gmail.com

// Nếu sửa ở trong input thì sẽ thay đổi Property, dữ liệu các bạn nhìn thầy ở UI là phản ánh của chính dữ liệu hiện tại(trong Property), và nếu thay đổi Property thì sẽ thay đổi dữ liệu hiện tại trong UI

// email.value = "hihi"; // sẽ thay đổi UI abc@gmail.com => hihi
// Và lưu ý Attribute sẽ không thay đổi

email.setAttribute("value", "xyz@gmail.com");
console.log(email.value); // xyz@gmail.com
// Lúc này UI ở ô input sẽ thay đổi , nghĩa là sửa Attribute lúc này Property sẽ đồng bộ theo
// Nhưng lưu ý Property đồng bộ là khi chưa có sự thay đổi, còn nếu thay đổi rồi thì sẽ không đồng bộ nữa vd ("abc@gmail.com") thay đổi thành ("abc@gmail.vn") rồi thay đổi Attribute thành "xyz@gmail.com" email.setAttribute("value", "xyz@gmail.com"); như nói ở trên lúc này Property sẽ không thay đổi
