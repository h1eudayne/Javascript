const sealedObj = Object.seal({ a: 1 });

sealedObj.a = 2; // Thay đổi giá trị của thuộc tính 'a' thành công
sealedObj.b = 3; // Cố gắng thêm thuộc tính mới 'b' không thành công

console.log(sealedObj.a); // 2
console.log(sealedObj.b); // undefined
