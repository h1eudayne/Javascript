// Pseudo classes/elements
// - :hover, ...
// - ::before, ...

// - Lưu ý: không thể nào tương tác style của phần tử để thực hiện bởi vì style của phần tử là quản lý css inline

// - Muốn thực hiện được phải dùng document.styleSheets
// - styleSheets quản lý tất cả đối tượng css internal và cả external

const style = document.styleSheets[0];
// [0]: Dùng để truy cập vào stylesheet đầu tiên trong danh sách trong trường hợp này là "<link rel="stylesheet" href="./style.css" />"

style.insertRule(
  `
    #heading:hover {
        color: red;
    }    
`,
  style.cssRules.length
  // Đây là một danh sách chứa tất cả các quy tắc CSS đã có trong stylesheet. Khi sử dụng .length làm chỉ mục, quy tắc mới sẽ được chèn vào cuối cùng của stylesheet.
);

// - Với cách này thì chỉ được chèn 1 rule duy nhất
// - Nếu bạn cần thêm nhiều rule khác nhau, bạn phải gọi insertRule nhiều lần, mỗi lần với một rule riêng lẻ.

console.log(style);
