const heading = document.querySelector("#heading");

console.log(heading.style.color); // red
console.log(heading.style.fontSize); // 50px

// style là 1 Obj quản lý tất cả thuộc tính css inline của phần tử đó và lưu ý là được viết dưới dạng camelCase
// Lưu ý: với màu sắc nếu dùng cụ thể màu ex : "red", "blue" thì sẽ trả về đúng tên màu đó, còn nếu dùng mã màu thì sẽ trả về rgb(,,), còn nếu truyền vào là rgba(255,0,0,1) thì sẽ trả về lại là rgba(255,0,0) còn nếu là rgba(255,0,0,0.9) thì sẽ trả về lại là rgba(255,0,0,0.9)
// Lưu ý: nếu css theo các kiểu khác sẽ không lấy được, chỉ lấy được khi css theo kiểu inline

// Muốn lấy ra tất cả css inline thì dùng cssText
console.log(heading.style.cssText); // color: red; font-size: 50px;

//------------------------------------------------------------------------

// Sửa style

// C1
// Thêm từng phần tử
heading.style.color = "green";
heading.style.backgroundColor = "#ccc";
// Nếu bạn muốn thêm nhiều phần tử thì cách này khá dài dòng

// C2
// Muốn thêm nhiều phần tử cùng 1 lúc thì nên dùng Object.assign
Object.assign(heading.style, {
  color: "red",
  fontStyle: "italic",
});
// assign công dụng là hợp nhất object bên phải vào object ở bên trái

// C3
// Dùng cụ thể các code css luôn
heading.style.cssText = `
    ${heading.style.cssText} // dòng này để lưu lại các style css inline trước đó
    font-size: 50px
`;
// Lưu ý:
// - Lúc này viết đúng css chứ không phải camelCase
// - Cách này sẽ ghi đè toàn bộ css inline hiện có vd với trường hợp trên sẽ mất tất cả css inline chỉ còn mỗi font-size: 50px

// Dựa vào cách thức đó ta có cách để xóa toàn bộ css inline hiện có bằng cách
heading.style.cssText = "";
heading.style = "font-size: 50px"; // nếu không .cssText thì code sẽ tự hiểu và thêm vào

console.log(heading.style.cssText); // rỗng
