/*
- Hãy mở rộng Array.prototype bằng cách thêm một phương thức mới là forEach2(callback, thisArg) có chức năng tương tự như phương thức forEach() nguyên bản của JavaScript.

- Cụ thể:
    + Phương thức này nhận một hàm callback làm tham số đầu tiên. Hàm này sẽ được gọi cho từng phần tử trong mảng.
    + Hàm callback nhận vào 3 tham số: giá trị hiện tại, chỉ mục của phần tử và chính mảng đó.
    + Tham số thứ hai là thisArg (không bắt buộc). Nếu được cung cấp, giá trị của this trong callback sẽ là thisArg.
    + Phương thức chỉ lặp qua các phần tử theo length ban đầu của mảng (nếu mảng thay đổi trong quá trình lặp, số lần lặp không bị thay đổi).
    + Phương thức sẽ bỏ qua các phần tử trống (empty elements) trong mảng khi gọi callback.
- Yêu cầu: Không được sử dụng phương thức forEach() nguyên bản của JavaScript
*/

Array.prototype.forEach2 = function(callback, thisArg) {
    const length = this.length;
    for(let i = 0 ; i < length ; i++) {
        if(i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
};

// Sample usage
const sparseArr = [1, , 3];  // Lưu ý phần tử thứ 2 bị trống
sparseArr.forEach2((value, index) => {
    console.log(`Value: ${value}, Index: ${index}`);
});
// Value: 1, Index: 0
// Value: 3, Index: 2