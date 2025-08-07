/**
 * 1. Viết một hàm repeatChar nhận vào hai tham số: character và n. Hàm này sẽ trả về một chuỗi gồm kí tự character được lặp lại n lần.
 * 2. Viết một hàm arrayToHTMLList nhận vào một mảng các chuỗi và trả về một chuỗi HTML. Chuỗi HTML này sẽ thể hiện một danh sách không sắp xếp (<ul>) với mỗi phần tử của mảng được biểu diễn bằng một mục danh sách (<li>).
 * 3. Viết một hàm linearSearch nhận vào hai tham số: một mảng số nguyên arr và một giá trị target cần tìm. Hàm này sẽ thực hiện tìm kiếm trong mảng: nếu tìm thấy target, trả về vị trí (index) của target trong mảng; nếu không tìm thấy, trả về -1. 
 * */
/**
 * 1. Repeats a character for a given number of times.
 * @param {string} character - The character to repeat.
 * @param {number} n - The number of times to repeat the character.
 * @returns {string} The repeated character string.
 */
function repeatChar(character, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += character;
    }
    return result;
}
// Sample usage
console.log(repeatChar('*', 5)); // *****
console.log(repeatChar('a', 3)); // aaa
console.log(repeatChar('b', 0)); // (empty string)

/**
 * 2. Converts an array of strings into an unordered list HTML string.
 * @param {string[]} array - The array of strings to convert.
 * @returns {string} An HTML string representing the array as an unordered list.
 */


// Sample usage
// console.log(arrayToHTMLList(['HTML', 'CSS', 'JavaScript']));
// // <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>

const arrayToHTMLList = (arr) => {
    let html = "<ul>"
    for(let i = 0; i < arr.length ; i++) {
        html+=`<li>${arr[i]}</li>`;
    }
    html += "</ul>";
    return html;
}
/**
 * 3. Performs a linear search for a target value within an array.
 * @param {number[]} arr - The array to search through.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target if found, otherwise -1.
 */


// Sample usage
// console.log(linearSearch([5, 3, 7, 6, 2, 9], 6)); // 3
// console.log(linearSearch([5, 3, 7, 6, 2, 9], 10)); // -1

const linearSearch = (arr, target) => {
    let find = -1;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === target) {
            find = i;
        }
    }
    return find;
}