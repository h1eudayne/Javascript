//-------------------------------------Primitive types--------------------------------------------------------------
let string1 = "hello";
let string2 = "hello";

console.log(string1 === string2); // true
//----------------------------------Primitive types la bat bien-----------------------------------------------------------
let str = "hello";
str[0] = "ABC";

console.log(str); // hello

//--------------------------------------Reference types--------------------------------------------------------------
let numbers = [1, 2, 3, 4, 5];
function sum(a, b) {
  return a + b;
};
//----------------------------------Reference types duoc luu tru-----------------------------------------------------------------
// VD ben duoi khi sua personCopy, person cung bi sua theo
let person = {
  name: "John"
};
let personCopy1 = person;

personCopy1.name = "Bob";

console.log(personCopy1.name); // Bob
console.log(person.name); // Bob

//---------------------------------------------------------------------------------------------------
// Su dung Object.assign() de sao chep doi tuong 
// Sua doi tuong personCopy khong anh huong toi person
let person2 = {
  name: "John"
};
let personCopy2 = Object.assign({}, person2);

console.log(person2);
console.log(personCopy2);

//------------------------------------Các sai lầm thường gặp---------------------------------------------------------------
//------------------------------------So sánh trực tiếp hai đối tượng---------------------------------------------------------------
// JSON.stringify() se chuyen đổi đối tượng thành chuỗi JSON để so sánh
let object1 = { key: "value" };
let object2 = { key: "value" };

console.log(JSON.stringify(object1) === JSON.stringify(object2));// true


//-----------------------------------sao chép nông (shallow copy).----------------------------------------------------------------
// Sao chep nong khong sao chep duoc cac thuoc tinh con cua doi tuong
let person3 = {
  name: "John",
  info: {
    id: 1234
  }
};
let personCopy3 = Object.assign({}, person3);

console.log(person3.info === personCopy3.info); // true


//---------------------------------- sao chép sâu (deep copy)-----------------------------------------------------------------
let person4 = {
  name: "John",
  info: {
    id: 1234
  }
};
let personCopy4 = structuredClone(person4);

console.log(person4.info === personCopy4.info); // false

//---------------------------------------------------------------------------------------------------
