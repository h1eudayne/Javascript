// XSS - Cross Site Scripting
// Là kĩ thuật tấn công chèn mã vào ứng dụng của ta

// Giả lập 1 ứng dụng chat đơn giản
const submit = document.querySelector("#submit");
const input = document.querySelector("#chat-input");
const messages = document.querySelector("#message");

submit.onclick = function () {
  messages.innerHTML = `${messages.innerHTML} <li>${input.value}</li>`;
  input.value = "";
};

// Với cách làm này khi nhập

// Ex
// <h1>Xin Chao</h1>
// Sẽ chạy ra đoạn code trên giao diện với thẻ là h1 và nội dung là xin chào

// Ex
// <script>alert("Hacked")</script>
// Sẽ không chạy nhưng vẫn thêm vào message, bởi vì trình duyệt cũng cố gắng hạn chế XSS nhưng chỉ là hạn chế thôi
// Nhưng vẫn có cách lách

// Ở html có 1 attribute là onerrror , onerror có mục đích là nếu link ảnh bị lỗi thì sẽ chạy trong onerror
/*
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_jakesully_dfsf16x9_1098_02_b13c4171.jpegsdfs?region=0%2C0%2C1920%2C1080"
      width="150px"
      onerror="console.log(Math.random())" 
    />
*/
// Nếu nhập đoạn mã này vào input sẽ trả ra Math.random() sẽ lách được hạn chế XSS của trình duyệt vì không quan trọng đoạn mã nào chỉ cần ảnh sai thì onerror sẽ được chạy

// Vì vậy sẽ rất nguy hiểm bởi vì khi chạy được code javascript thì sẽ làm được rất nhiều thứ vd như đánh cắp thông tin hay chuyển đến 1 trang khác

// Ex: chuyển đến google.com
/*
    <img
      src="https://lumiere-a.akamaihd.net/v1/images/a_avatarpandorapedia_jakesully_dfsf16x9_1098_02_b13c4171.jpegsdfs?region=0%2C0%2C1920%2C1080"
      width="150px"
      onerror="location.href = 'https://www.google.com/' "
    />
*/

//-------------------------------------------------------------------------------------------------
// Cách làm để tránh tấn công XSS

// C1: Không dùng innerHTML

// Mở comment để test cách này đã fix hoàn toàn lỗi XSS

// submit.onclick = function () {
//   const message = document.createElement("li");
//   message.textContent = input.value;
//   messages.appendChild(message);
//   input.value = "";
// };
