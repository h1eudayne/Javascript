//---------------------------------------------------------------------------------------------------
// Sử dụng JSON.stringify để so sánh nội dung
let student1 = { id: 1, name: "Bob" };
let student2 = { id: 1, name: "Bob" };

console.log(JSON.stringify(student1) === JSON.stringify(student2)); // true
//Tuy nhiên, điểm yếu của phương pháp này là khi các thuộc tính và giá trị giống nhau, nhưng thứ tự khác nhau sẽ cho kết quả false

