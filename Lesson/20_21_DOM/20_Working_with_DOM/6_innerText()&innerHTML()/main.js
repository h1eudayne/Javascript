//innerText
// - innerText giúp ta lấy ra hoặc thay đổi nội dung trong 1 phần tử

const h1 = document.querySelector("#title");
const output = document.querySelector("#output");

// lấy phần tử ra

console.log(h1); // <h1 id="title">Hello Hieu</h1>
// Đôi lúc log 1 phần tử sẽ hiện ra với dạng object, đôi lúc sẽ hiện ra với dạng html
// để chuyển thành dạng object thì dùng console.dir(h1);

console.log(h1.innerText); // Hello Hieu
// sẽ trả về nội dung bên trong phàn tử

// thay đổi nội dung bên trong phần tử
output.innerText = "Hello World";

// Khi nào chúng ta chỉ muốn lấy nội dung thôi mà không cần lấy thẻ HTML thì dùng innerText
// Hoặc khi muốn gán HTML vào phần tử và show ra giao diện thì dùng innerText

//innerHTML
// - innerHTML giúp ta lấy ra hoặc thay đổi toàn bộ nội dung HTML bên trong 1 phần tử

// Lấy phần tử ra
const output2 = document.querySelector("#output2");
const h2 = document.querySelector(".title");

console.log(h1.innerHTML); // Hello Hieu
// Trong trường hợp này thì sẽ tương tự như innerText vì bên trong không có thẻ HTML nào

console.log(h2.innerHTML); // <span>Hello Hieu Ne</span>
// Trường hợp này thì sẽ trả về toàn bộ nội dung HTML bên trong phần tử, bao gồm cả thẻ HTML

// Thay đổi nội dung bên trong phần tử

output2.innerText = "Hello World";

// Trường hợp này vẫn tương tự như innerText vì bên trong không có thẻ HTML nào

output2.innerHTML = "<h1>Hello World</h1>";
// Trường hợp này sẽ thay đổi toàn bộ nội dung bên trong phần tử, bao gồm cả thẻ HTML

// Khi muốn lấy ra toàn bộ các cú pháp HTML bên trong phần tử thì dùng innerHTML

// Hoặc là muốn sửa nội dung phần tử và thể hiện các thẻ HTML thì dùng innerHTML


// Ex: Cho 1 mảng khoá học và hiển thị ra giao diện theo ul, li
const ex1 = document.querySelector("#ex1");

const courses = ["HTML", "CSS", " JavaScript", "ReactJS", "NodeJS"];

const result = courses.map(course => {
    return `<li>${course}</li>`;
}).join("");

console.log(result); // <li>HTML</li><li>CSS</li><li> JavaScript</li><li>ReactJS</li><li>NodeJS</li>

const html = `<ul>${result}</ul>`
console.log(html); // <ul><li>HTML</li><li>CSS</li><li> JavaScript</li><li>ReactJS</li><li>NodeJS</li></ul>

output2.innerHTML = html;

// Ex: Cho 1 đoạn text có chứa các thẻ html làm sao để thu lại được 1 đoạn text chỉ chứa nội dung, và xoá hết các thẻ html trong đoạn

const ex2 = document.querySelector("#ex2");

const content = `
<p class="intro">With the HTML DOM, JavaScript can access and change all the elements of an HTML document.</p>

<h2>The HTML DOM (Document Object Model)</h2>
<p>When a web page is loaded, the browser creates a <strong>D</strong>ocument <strong>O</strong>bject <strong>M</strong>odel of the page.</p>
<p>The <strong>HTML DOM</strong> model is constructed as a tree of <strong>Objects</strong>.</p>
`;

ex2.innerHTML = content;
// Đầu tiên dùng thẻ innerHTML để show hết nội dung ra ngoài, đồng thời sẽ không hiện các thẻ trong html

console.log(ex2.innerText);
// Sau đó ta sẽ thu lại innerText của phần tử đó, thì sẽ nhận ra kết quả như mong đợi, nhưng làm cách này thì sẽ ảnh hưởng đến giao diện