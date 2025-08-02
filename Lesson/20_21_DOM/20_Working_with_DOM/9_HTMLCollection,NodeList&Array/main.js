// HTMLCollection:
// - document.getElementsByTagName()
// - document.getElementsByClassName()
// NodeList:
// - document.querySelectorAll()
// Array

// HTMLCollection:
const elements = document.getElementsByTagName("li");
console.log(elements); // HTMLCollection(10)

// - Các điểm giống mảng
// + Để giá trị trong []
// + Có index tăng dần từ 0
// + Có thuộc tính length

// - Khác
// + HTMLCollection được khởi tạo từ hàm tạo HTMLCollection (hàm tạo có sẵn)
// + Được kế thừa từ HTMLCollection.prototype nên là HTMLCollection không làm việc được với các phương thức làm việc với mảng

// - Làm việc với HTMLCollection
// + Để lặp qua HTMLCollection
//      Dùng vòng lặp dựa vào index
// + Còn muốn dùng các phương thức trong mảng để làm việc với HTMLCollection
//      Chuyển sang mảng
const array = Array.from(elements);

// NodeList:
const elements1 = document.querySelectorAll("li");
console.log(elements1); // NodeList(10)

// - Các điểm giống mảng
// + Để giá trị trong []
// + Có index tăng dần từ 0
// + Có thuộc tính length

// - Khác
// + NodeList được khởi tạo từ hàm tạo NodeList (hàm tạo có sẵn)
// + Được kế thừa từ NodeList.prototype nên là NodeList không làm việc được với các phương thức làm việc với mảng ngoại trừ forEach

elements1.forEach((item) => {
    console.log(item);
})

// - Làm việc với NodeList
// + Để lặp qua NodeList
//      Dùng vòng lặp dựa vào index
//      Dùng forEach
// + Còn muốn dùng các phương thức trong mảng để làm việc với NodeList
//      Chuyển sang mảng
const array2 = Array.from(elements1);

// Array
// Mảng được kế thừ từ Array.prototype