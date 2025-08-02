/*
Hãy viết hàm isStrongPassword nhận vào một chuỗi password và kiểm tra xem mật khẩu có mạnh hay không. Để mật khẩu được coi là mạnh, nó phải thỏa mãn các điều kiện sau:
    Độ dài tối thiểu là 8 ký tự.
    Chứa ít nhất một ký tự in hoa (A-Z).
    Chứa ít nhất một ký tự thường (a-z).
    Chứa ít nhất một chữ số (0-9).
    Chứa ít nhất một ký tự đặc biệt trong khoảng từ ký tự đặc biệt của bảng mã UTF-8 có char code từ 33 đến 47 (bao gồm các ký tự !, #, $, %, &, *, (, ), …).
*/

function isStrongPassword(password) {
    let length = password.length;

    if (typeof password !== 'string' || password.length < 8) {
        return false;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    for (let i = 0; i < length; i++) {
        let char = password[i];

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }

        if (char >= 'a' && char <= 'z') {
            hasLowercase = true;
        }

        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }

        let charCode = char.charCodeAt(0);
        if (charCode >= 33 && charCode <= 47) {
            hasSpecial = true;
        }
    }
    return hasUppercase && hasLowercase && hasNumber && hasSpecial;

}

// Sample usage
console.log(isStrongPassword("Password1!")); // true
console.log(isStrongPassword("weakpass")); // false
console.log(isStrongPassword("12345678")); // false
console.log(isStrongPassword("!A2bcdefg")); // true
console.log(isStrongPassword("!Abcdef")); // false
console.log(isStrongPassword("!Abc123")); // false
console.log(isStrongPassword(123123123)); // false