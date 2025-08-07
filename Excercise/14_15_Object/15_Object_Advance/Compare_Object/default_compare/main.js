
//---------------------------------------------------------------------------------------------------
// Dùng toán tử === để so sánh tham chiếu

// So sanh kieu thong thuong thi chi so sanh dia chi cua doi tuong
// Do do, hai doi tuong duoc xem la khac nhau
let car1 = { make: 'Toyota', model: 'Corolla' };
let car2 = { make: 'Toyota', model: 'Corolla' };
let car3 = car1;
//---------------------------------------------------------------------------------------------------

// Khác tham chiếu
console.log(car1 === car2); // false

// Cùng tham chiếu
console.log(car1 === car3); // true
