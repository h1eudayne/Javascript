/**
 * Reverse the given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 */
const reverseString  = (str) => {
    return str.split("").reverse().join("");

    // Dùng split() để chuyển string thành array rồi dùng reverse() để đảo thứ tự trong mảng và rồi dùng join() để chuyển từ array về lại string rồi trả về
}

// Sample usage
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("OpenAI")); // "IAnepO"
console.log(reverseString("12345")); // "54321"