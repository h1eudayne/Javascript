// * Các lưu ý để dễ nhớ làm việc

// - Nếu có tồn tại 1 method có UTC ex (getUTCFullYear) thì sẽ có 1 method tương tự nhưng không có UTC ex (getFullYear)
// - Nếu có tồn tại 1 method set ex (setFullYear) thì sẽ có 1 method get ex (getFullYear)
// - Ghi nhớ các method đều xoay quanh : "Năm > Tháng > Ngày > Giờ > Phút > Giây > Mili giây" thứ tự từ lớn đến bé

// ---------------------------------------------------------------------

let date = new Date(2023, 11, 24, 10, 10, 20, 0);

// ---------------------------------------------------------------------
console.log("-------Get---------");
// getFullYear() trả về năm của đối tượng Date
console.log(date.getFullYear()); // 2023
// getMonth() trả về tháng của đối tượng Date (tháng 0 là tháng 1, tháng 11 là tháng 12)
console.log(date.getMonth()); // 11
// getDate() trả về ngày của đối tượng Date
console.log(date.getDate()); // 24
// getHours() trả về giờ của đối tượng Date
console.log(date.getDay()); // 0 (Chủ nhật)
// getDay() trả về ngày trong tuần của đối tượng Date (0 là Chủ nhật, 1 là Thứ hai, ..., 6 là Thứ bảy)
console.log(date.getHours()); // 10
// getMinutes() trả về phút của đối tượng Date
console.log(date.getMinutes()); // 10
// getSeconds() trả về giây của đối tượng Date
console.log(date.getSeconds()); // 20
// getMilliseconds() trả về mili giây của đối tượng Date
console.log(date.getMilliseconds()); // 0

// ---------------------------------------------------------------------
console.log("-------Set---------");
// Set các giá trị cho đối tượng Date
date.setFullYear(2024); // Thay đổi năm thành 2024
console.log(date.getFullYear()); // 2024

// setFullYear() có thể set cả tháng và ngày 
date.setFullYear(2024, 11, 31); // Thay đổi năm thành 2024, tháng thành 12, ngày thành 31
console.log(date.getFullYear()); // 2024
console.log(date.getMonth()); // 11
console.log(date.getDate()); // 31

// Không có set thứ tự ngày trong tuần vì nó được tính toán tự động dựa trên ngày, tháng và năm đã set
