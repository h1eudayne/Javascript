// UTF-8

// Unicode Transformation Format

// Unicode: Universal Code

// Ex:

// "A" => 65
// "B" => 66
// "C" => 67
// ...
// "Z" => 90

// "a" => 97
// "b" => 98
// "c" => 99
// ...
// "z" => 122


// Ex

console.log("ABC".charCodeAt(0));//65
// sẽ chuyển chữ sang số theo ASCII

console.log(String.fromCharCode(65, 90)); //AZ
// chuyển từ số sang chữ theo mã ASCII

// Ex: kt chữ J có phải chữ nằm trong A=>Z không

let char = "J";

// C1
let code = char.charCodeAt(0);
console.log(code >= 65 && code <= 90); // true

// C2
console.log(char >= "A" && char <= "Z"); // true
