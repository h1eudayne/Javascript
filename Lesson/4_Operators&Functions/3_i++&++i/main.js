// - Toán tử ++ có thể sử dụng dưới dạng tiền tố (++i) hoặc hậu tố (i++). Sự khác biệt giữa hai toán tử có thể ảnh hưởng tới giá trị của biến trong một biểu thức.

// - Ví dụ:

// Hậu tố
let i = 1;
i++; // 1 (trả về giá trị trước khi tăng)
console.log(i); // 2
// Tiền tố
let j = 1;
++j; // 2 (trả về giá trị sau khi tăng)
console.log(j); // 2

// * Toán tử ++

// - Toán tử i++ (Post-increment)
// + Trả về giá trị hiện tại của i, sau đó mới tăng giá trị lên 1.

// Ví dụ:
let i1 = 5;
console.log(i1++); // 5
console.log(i1); // 6

// - Toán tử ++i (Pre-increment)
// + Tăng giá trị của i lên 1, sau đó trả về giá trị mới.

// - Ví dụ:

let i2 = 5;
console.log(++i2); // 6
console.log(i2); // 6

// + Toán tử -- có cách hoạt động tương tự. Điểm khác biệt là toán tử -- trừ đi 1, trong khi ++ là cộng thêm 1.

// * Sự khác biệt chính
// - Thời điểm cập nhật giá trị: i++ cập nhật giá trị sau khi biểu thức được đánh giá, trong khi ++i cập nhật trước.
// - Giá trị sử dụng trong biểu thức: Với i++, giá trị ban đầu của i được sử dụng; với ++i, giá trị mới sau khi tăng được sử dụng.
