const frozenObj = Object.freeze({ a: 1 });

frozenObj.a = 2; // Cố gắng thay đổi giá trị của 'a' không có hiệu lực
frozenObj.b = 3; // Cố gắng thêm thuộc tính mới 'b' không thành công

console.log(frozenObj.a); // 1
console.log(frozenObj.b); // undefined
