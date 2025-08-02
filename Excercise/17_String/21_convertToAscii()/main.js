/**
 * The function takes a string and returns an array of ASCII codes for each character.
 * If a character is outside the ASCII range, it returns "Invalid character".
 * @param {string} str - Input string to be converted.
 * @returns {number[] | string} Array of ASCII codes or "Invalid character" if any character is outside the ASCII range.
 */
function convertToAscii(str) {
    if (typeof str !== "string") {
        return "Invalid input";
    }

    const asciiArr = Array.from(str).map(char => {
        return char.charCodeAt(0);
    });
    
    if(asciiArr.some(code => code > 127)) {
        return "Invalid character";
    }
    return asciiArr;
}

// Sample usage
console.log(convertToAscii("ABC")); // [65, 66, 67]
console.log(convertToAscii("hello")); // [104, 101, 108, 108, 111]
console.log(convertToAscii("123")); // [49, 50, 51]
console.log(convertToAscii("!@#")); // [33, 64, 35]
console.log(convertToAscii(" ")); // [32]
console.log(convertToAscii("é")); // "Invalid character"
console.log(convertToAscii(['á'])); // "Invalid input"
console.log(convertToAscii("你好")); // "Invalid character"