/**
 * Add a custom toUpperCase2 method to String.prototype
 * This method converts all lowercase letters (a-z) to uppercase (A-Z)
 * without using the original toUpperCase method.
 */
String.prototype.toUpperCase2 = function() {
    let result = "";
    for(let i = 0 ; i < this.length ; i++){
        let char = this[i];
        let charCode = this[i].charCodeAt(0);
        if(charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(charCode - 32);
        } else {
            result += char;
        }
    }
    return result;
};

/**
 * Add a custom toLowerCase2 method to String.prototype
 * This method converts all uppercase letters (A-Z) to lowercase (a-z)
 * without using the original toLowerCase method.
 */
String.prototype.toLowerCase2 = function() {
    let result = "";
    for(let i = 0 ; i < this.length ; i++) {
        let char = this[i];
        let charCode = this[i].charCodeAt(0);

        if(charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
        } else {
            result += char;
        }
    }
    return result;
};

// Sample usage
console.log("hello World".toUpperCase2()); // "HELLO WORLD"
console.log("HELLO WORLD".toLowerCase2()); // "hello world"
console.log("aBcDeFgHi".toUpperCase2()); // "ABCDEFGHI"
console.log("aBcDeFgHi".toLowerCase2()); // "abcdefghi"
console.log("ÁéíÓú".toUpperCase2()); // "ÁéíÓú" // không thay đổi các ký tự có dấu