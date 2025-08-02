console.log("😊😂🤣".length); // 6

// length trong emoji sẽ đếm code units(bậc nhỏ nhất để hình thành nên emoji), chớ k phải đếm số lượng hiện ra log

// 2 code units : 😊

// 2 code units : 😂

// 2 code units : 🤣

// Để đếm đúng số kí tự in ra log thì dùng Array.from() sẽ đưa mỗi emoji thành 1 phần tử của mảng
console.log(Array.from("😊😂🤣").length);
// vs Emoji thì phải dùng Array.from()

// - Nếu dùng split thì không được, split sẽ chia emoji theo cấp độ code units luôn

