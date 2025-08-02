/**
 * Convert all lowercase letters in the string to uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} - A new string with all lowercase letters converted to uppercase.
 */
function toUpperCaseCustom(str) {
    let result = "";
    
    for(let i = 0 ; i < str.length ; i++) {
        let char = str[i];
        let charCode = char.charCodeAt(0);

        if(charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += char;
        }
    }
    return result;
}

/**
 * Convert all uppercase letters in the string to lowercase.
 * @param {string} str - The string to convert.
 * @returns {string} - A new string with all uppercase letters converted to lowercase.
 */
function toLowerCaseCustom(str) {
    let result = "";

    for(let i = 0 ; i < str.length ; i++) {
        let char = str[i];
        let charCode = str[i].charCodeAt(0);

        if(charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += char;
        }

    }
    return result;
}

// Sample usage
console.log(toUpperCaseCustom("hello World!")); // "HELLO WORLD!"
console.log(toLowerCaseCustom("HELLO World!")); // "hello world!"
console.log(toUpperCaseCustom("abc123")); // "ABC123"
console.log(toLowerCaseCustom("ABC123")); // "abc123"
console.log(toUpperCaseCustom("ÁéíÓú")); // "ÁéíÓú" // không thay đổi các ký tự có dấu
console.log(toLowerCaseCustom("ÁéíÓú")); // "ÁéíÓú" // không thay đổi các ký tự có dấu