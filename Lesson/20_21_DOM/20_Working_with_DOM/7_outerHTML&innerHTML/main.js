// outerHTML
// outerHTML gần giống innerHTML nó chỉ khác là lấy ra, hoặc chỉnh sửa cả chính HTML của phần tử đó

// Ex
const parent = document.querySelector("#parent")

console.log(parent.innerHTML); // <h1>Hello Hieu Ne</h1>
// innerHTML chỉ lấy ra nội dung html bên trong thôi

console.log(parent.outerHTML);
/*
    <div id="parent">
        <h1>Hello Hieu Ne</h1>
    </div>
*/

// nếu gán cũng tương tự dùng innerHTML sẽ gán <h1>Hello Hieu Ne</h1>
// còn dùng outerHTML thì sẽ gán vào div #parent luôn
