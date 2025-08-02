// getTime()
const date = new Date();

console.log(date.getTime()); // tương tự như Date.now()
// Trả về số milliseconds từ 1/1/1970 đến thời điểm hiện tại

const date1 = new Date("2023-12-24T10:10:20Z");
const date2 = new Date("2023-12-24T10:10:20Z");

// Nếu dùng >, <, >=, <= thì sẽ so sánh theo timestamp
console.log(">, <, >=, <=");
console.log(date1.getTime() > date2.getTime()); // false
console.log(date1.getTime() < date2.getTime()); // false
console.log(date1.getTime() >= date2.getTime()); // true
console.log(date1.getTime() <= date2.getTime()); // true

// Nếu dùng ==, !=, ===, !== thì sẽ so sánh theo đối tượng Date
console.log("==, !=, ===, !==");
console.log(date1 == date2); // false
console.log(date1 != date2); // true
console.log(date1 === date2); // false
console.log(date1 !== date2); // true
// Bởi vì đối tượng Date là một đối tượng tham chiếu, nên khi so sánh sẽ so sánh địa chỉ bộ nhớ của chúng, không phải giá trị của chúng.

// Nếu muốn so sánh == hoặc === thì dùng getTime()
console.log(date1.getTime() == date2.getTime()); // true
// Lúc này sẽ so sánh theo timestamp, tức là so sánh giá trị của chúng, không phải địa chỉ bộ nhớ.

// --------------------------------------------------------------------------------------

// getTimezoneOffset()

const date3 = new Date();
console.log(date3.getTimezoneOffset()); // -420
// Trả về số phút lệch múi giờ so với UTC
// Ví dụ: -420 có nghĩa là UTC+7, tức là Việt Nam đang ở múi giờ UTC+7
