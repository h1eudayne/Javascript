// Phòng tránh XSS khi vẫn muốn sử dụng innerHTML

// * Tình huống : web các bạn có wysiwyg editor (what you see is what you get editor)

// Trong trường hợp 1 bài blog sẽ dùng nhiều thẻ html nếu mà dùng innerText sẽ show luôn cả các thẻ html đó lên, lúc này buộc phải dùng innerHTML

const content = `
    <h2>Step 1: Set Up Your Development Environment</h2>
<p>Before starting, make sure you have the necessary tools installed.</p>

<pre><code>mkdir my-javascript-app
cd my-javascript-app</code></pre>

<h2>Step 2: Create Your Main JavaScript File</h2>
<p>Inside your project directory, create an <code>index.js</code> file.</p>

<blockquote>
  <p>"Good code is its own best documentation." – Steve McConnell</p>
</blockquote>

<h2>Step 3: Setting Up HTML and Linking JavaScript</h2>
<p>In order to see your JavaScript in action, you'll need an HTML file.</p>

<pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My JavaScript App&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;script src="index.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<h2>Step 4: Adding Some Interactive Features</h2>
<p>Now, let’s add some JavaScript code to interact with the user.</p>

<pre><code>
document.querySelector("button").addEventListener("click", function () {
  alert("Hello, World!");
});
</code></pre>

// <img src="" onerror="alert('Hacked')"> ví dụ 1 đoạn mã chứa mã độc
`;

const article = document.querySelector("#article");

// article.textContent = content;
// article.innerText = content;
// Trong trường hợp này buộc phải dùng innerHTML

// Vậy để tránh XSS thì ta sẽ lọc trước khi đưa vào DOM
// Sử dụng thư viện DOMPurify để làm điều này

// DOMPurify.sanitize() dùng để lọc các mã không an toàn trong thư viện DOMPurify

article.innerHTML = DOMPurify.sanitize(content);
