const box = document.querySelector(".box");

console.log(box);

// - Để học được bài này phải chắc các kiến thức sau:

// + position: static (default), absolute, relative, sticky, fixed
// + margin collapse
// + viewport

// -------------------------------------------------------------------------------------

// * Offset

// -------------------------------------------------------------------------------------

// - Offset sẽ hưu ích khi muốn xác định phần tử nằm ở không gian của 1 phần tử khác

// Ex : ví dụ css
/*
    .box {
        margin-top: 20px;
        margin-left: 20px;
    }
*/

// Ex: position: static(default)
// - offsetTop : cách bên trên
console.log(box.offsetTop); // 20

// - offsetLeft : cách bên trái
console.log(box.offsetLeft); // 28

//-----------

// Ex: position: relative
/*
    .container {
        position: relative;
    }
*/

// - offsetTop : cách bên trên
// console.log(box.offsetTop); // 0

// - offsetLeft : cách bên trái
// console.log(box.offsetLeft); // 0

// - Với relative sẽ đo từ box đến container

// - Đều dùng margin 20 nhưng top sẽ trả về 20 và left sẽ là 28 vì top theo mặc định body sẽ margin top là 8 và khi ta css margin top của box 20 thì sẽ lấy giá trị lớn hơn và không cộng dồn , còn left thì có cộng dồn.

//-----------

// Ex : ví dụ css
/*
    .box {
        margin-top: 30px;
        margin-left: 20px;
    }
*/

// - offsetTop : cách bên trên
// console.log(box.offsetTop); // 0

// - offsetTop = 0 bởi vì lúc này xảy ra margin collapse giữa box và container, và margin sẽ margin cả container nên khoảng cách từ container và box vẫn là 0 nên không thay đổi giá trị

// - offsetLeft : cách bên trái
// console.log(box.offsetLeft); // 20

//-----------

// - Để margin collapse không xảy ra thì dùng display : flex
// - Ex: css
/*
    .container {
        display: flex;
        position: relative;
    }
    .box {
        margin-top: 30px;
        margin-left: 20px;
    }
*/

// - offsetTop : cách bên trên
// console.log(box.offsetTop); // 30

// - offsetLeft : cách bên trái
// console.log(box.offsetLeft); // 20

// -------------------------------------------------------------------------------------

// * Lưu ý không phải lúc nào offset top và offset left cũng tính từ html tới phần tử.

// * Ta có 2 tình huống để giải thích cho lưu ý trên:

// - Tình huống thứ nhất là không có thẻ cha nào dùng position khác mặc định

// - Tình huống thứ 2 là có thẻ cha dùng position khác mặc định, lúc đó top và left sẽ được tính từ phần tử cha gần nhất đến phần tử

// -------------------------------------------------------------------------------------

// * Rect

// -------------------------------------------------------------------------------------

// - Các thuộc tính top, bottom, right , left thì giá trị trả về là thước đo khoảng cách từ viewport cụ thể:
// + Top: sẽ là đo từ cạnh trên của phần tử tới cạnh trên của viewport
// + Bottom: sẽ là đo từ cạnh dưới của phần tử tới cạnh trên của viewport
// + Left: sẽ là đo từ cạnh trái của phần tử tới cạnh trái của vỉewport
// + Right: sẽ là đo từ cạnh phải của phần tử đo tới cạnh trái của view port

// ------------------------Viewport------------------------|
// |                    ^                 ^                |
// |                    |  y / top        |                |
// |                    V                 | bottom         |
// |    x / left       |---------------|  |                |
// |<----------------->|    Element    |  V                |
// |                   |---------------|---                |
// |<--------------------------------->|                   |
// |              right                                    |
// |-------------------------------------------------------|

// ---------

// - Rect sẽ hưu ích khi xác định cái vị trí của phần tử ở trong không gian phần nhìn thấy được của trình duyệt

const rect = box.getBoundingClientRect();
console.log(rect);
