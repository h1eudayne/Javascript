/*
Hãy viết một hàm deepCopy nhận vào một đối tượng (object) hoặc mảng (array). 
Hàm này sẽ tạo ra một bản sao sâu (deep copy) của đối tượng hoặc mảng đó. 
Bản sao sâu có nghĩa là các đối tượng hoặc mảng con bên trong cũng sẽ được sao chép thay vì chỉ sao chép tham chiếu.
*/

function deepCopy(obj) {
    return structuredClone(obj);
}

// Sample usage
const originalArray = [1, 2, { a: 3, b: 4 }];
const copiedArray = deepCopy(originalArray);
copiedArray[2].a = 10;
console.log(originalArray[2].a); // 3

const originalObject = { name: "John", details: { age: 25, address: { city: "New York" } } };
const copiedObject = deepCopy(originalObject);
copiedObject.details.address.city = "Los Angeles";
console.log(originalObject.details.address.city); // "New York"