// * replace() là gì?

// - replace() là một phương thức dùng để thay thế một phần của chuỗi bằng một giá trị mới.

// - Cú pháp:
// + let newString = string.replace(searchValue, newValue);

// - Giải thích:
// + searchValue: Chuỗi con cần thay thế trong string.
// + newValue: Chuỗi mới sẽ thay thế searchValue.

// - Trả về:
// + Chuỗi mới với lần xuất hiện đầu tiên của searchValue được thay bằng newValue.
// + Phương thức này không thay đổi chuỗi gốc.

// - Ví dụ:

let text1 = "Hello World!";
let newText1 = text1.replace("World", "JavaScript");

console.log(newText1); // "Hello JavaScript!"

// - Bài toán và ví dụ:

// + Thay thế một từ trong câu:

let sentence2 = "I love cats.";
let newSentence2 = sentence2.replace("cats", "dogs");

console.log(newSentence2); // I love dogs.


// + Sửa lỗi chính tả:
let typoText3 = "I have a baot.";
let correctedText3 = typoText3.replace("baot", "boat");

console.log(correctedText3); // I have a boat.


// - replace() giúp dễ dàng thay thế một phần của chuỗi khi cần cập nhật nội dung hoặc sửa lỗi.


// - 1 cách replace giống vs replaceAll (Biểu thức chính quy)
let sen = "Tôi yêu mèO mèo Mèo";

// Vẫn phân biệt hoa thường
console.log(sen.replace(/mèo/g, "chó" )); // Tôi yêu mèO chó Mèo

// Không phân biệt hoa thường
console.log(sen.replace(/mèo/gi, "chó" )); // Tôi yêu chó chó chó

// Giống ở trên nhưng có thên unicode
console.log(sen.replace(/mèo/giu, "chó" )); // Tôi yêu chó chó chó


// * replaceAll() là gì?

// - replaceAll() là một phương thức dùng để thay thế tất cả các phần tử phù hợp trong chuỗi bằng một giá trị mới.

// - Cú pháp:
// + let newString = string.replaceAll(searchValue, newValue);

// - Giải thích:
// + searchValue: Chuỗi con cần thay thế trong string.
// + newValue: Chuỗi mới sẽ thay thế tất cả các lần xuất hiện của searchValue.

// - Trả về:
// +  Chuỗi mới với tất cả các lần xuất hiện của searchValue được thay bằng newValue.
// + Phương thức này không thay đổi chuỗi gốc.

// - Ví dụ:

let text = "cats are cute, cats are playful";
let newText = text.replaceAll("cats", "dogs");

console.log(newText); // "dogs are cute, dogs are playful"

// - replaceAll() hữu ích khi cần thay thế tất cả các phần tử phù hợp trong chuỗi.

// - Bài toán và ví dụ:

// + Thay thế tất cả các từ trong câu:

let sentence = "banana, banana, banana";
let newSentence = sentence.replaceAll("banana", "apple");

console.log(newSentence); // apple, apple, apple


// + Thay thế ký tự trong chuỗi:

let typoText = "a-b-c-d";
let correctedText4 = typoText.replaceAll("-", "/");

console.log(correctedText4); // a/b/c/d

