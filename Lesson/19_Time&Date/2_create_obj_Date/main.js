let date = new Date(2000, 1 , 30 , 10 , 20 , 1, 200);

console.log(date);
console.log(date.getMilliseconds()); // 200

let now = Date.now(); // timestamp hiện tại
console.log(now); // ví dụ: 1724796645000

date = new Date(2023);
console.log(date); // nếu truyền mỗi 2023 thì 2023 sẽ là timestamp và năm này vẫn sẽ là 1970
// nên ít nhất phải truyền 2 tham số trở lên