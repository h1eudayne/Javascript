// Bài toán cần giải lấy ra css đang được thực thi, nếu dùng css inline sẽ không được vì đôi lúc css external dùng important và đang ghi đè các css inline nên kết quả trả ra sẽ không đúng

// Muốn lấy ra css đang thực thi thì dùng getComputedStyle()

const heading = document.querySelector("#heading");

console.log(getComputedStyle(heading));
// Nếu gọi không cụ thể hàm vẫn trả ra các thuộc tính mặc định dù ta không có css

console.log(getComputedStyle(heading).color);

// Nghĩa của hàm
// + get : lấy
// + computed : sau khi được tính toán
// + style : là css
// Nghĩa là hàm này có công dụng là chờ cho trình duyệt tính toán để biết được css cuối cùng đang áp dụng cho phần tử là gì, và sẽ trả về mảng object chứa đầy đủ các thuộc tính hiện tại đang áp dụng

console.log(getComputedStyle(heading, "::before").content); //"Hi "
console.log(getComputedStyle(heading, "::before").width); // 100px
// Lúc này tuy width không ăn nhưng có css thì sẽ show ra được

// Và hàm này có tham số thứ 2 là truyền pseudoElement vd:"::before,::after", nếu không có dùng các pseudoElement thì vẫn sẽ trả ra giá trị mặc định
