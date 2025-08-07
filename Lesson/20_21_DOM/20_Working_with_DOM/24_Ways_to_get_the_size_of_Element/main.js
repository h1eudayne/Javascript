const box = document.querySelector(".box");

// * Client : content + padding - scrollbar (nếu có) => trả về integer

// clientHeight lấy chiều cao
console.log("clientHeight: " + box.clientHeight); // 125

// clientWidth lấy chiều rộng
console.log("clientWidth: " + box.clientWidth); // 125

// ---------------------------------------------------------------

// * Offset : content + padding + border + scrollbar => trả về integer
// + offset chỉ ăn theo giá trị của box model thôi

// offsetHeight lấy chiều cao
console.log("offsetHeight: " + box.offsetHeight); // 159

// offsetWidth lấy chiều rộng
console.log("offsetWidth: " + box.offsetWidth); // 159

// ---------------------------------------------------------------

// * Rect : content + padding + border + scrollbar (display) => trả về float
// + Rect thiên về mặt hiển thị (tức là những gì chúng ta nhìn thấy trên giao diện trang web)
// + Rect sẽ ăn theo hiển thị nên là dùng transform sẽ làm thay đổi giá trị của rect khác với offset chỉ ăn theo giá trị của box model thôi

// getBoundingClientRect() : sẽ trả về thông tin vị trí và kích thước của phần tử 
const rect = box.getBoundingClientRect()

console.log(rect);
/*
    {
        "x": 8,
        "y": 8,
        "width": 100,
        "height": 100,
        "top": 8,
        "right": 108,
        "bottom": 108,
        "left": 8
    }
*/

console.log("rect.width: " + rect.width); // 318.3999938964844
console.log("rect.height: " + rect.height); // 318.3999938964844

// ---------------------------------------------------------------

// * Lưu ý scroll bar không phải là hệ điều hành nào, trình duyệt nào cũng giống nhau và sai số cũng vậy