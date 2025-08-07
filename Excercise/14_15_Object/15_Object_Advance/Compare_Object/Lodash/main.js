//---------------------------------------------------------------------------------------------------
// Dùng thư viện bên ngoài như Lodash
// Lodash cung cấp hàm _.isEqual để so sánh hai đối tượng
let obj1 = {
    part: {
        id: 10,
        name: 'Top'
    }
};
let obj2 = {
    part: {
        id: 10,
        name: 'Top'
    }
};

console.log(_.isEqual(obj1, obj2)); // true