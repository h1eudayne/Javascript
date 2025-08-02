let date = new Date("10:10 20/10/2010"); // thử định dạng theo kiểu Việt Nam

// cách kiểm tra xem có phải là một đối tượng Date hợp lệ hay không

// Cách 1: Sử dụng isNaN() để kiểm tra
console.log(isNaN(date));
// Nếu hợp lệ thì sẽ trả về false, nếu không hợp lệ thì sẽ trả về true

// Cách 2: Sử dụng phương thức getTime() để kiểm tra
console.log(date.getTime());
// Nếu hợp lệ thì sẽ trả về một số(timestamp), nếu không hợp lệ thì sẽ trả về NaN

console.log(date); // Invalid Date