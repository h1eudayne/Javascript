// * Tại sao vẫn sửa được Object tạo bởi const?
// - Trong JavaScript, từ khóa const được sử dụng để khai báo các biến mà giá trị của chúng không thể thay đổi thông qua việc gán lại. Tuy nhiên, điều này không có nghĩa là giá trị mà const tham chiếu đến không thể được thay đổi. Điều này đặc biệt đúng với các object và array.

// - Khi bạn sử dụng const để khai báo một object, bạn không thể gán lại toàn bộ object đó với một giá trị khác, nhưng bạn có thể thay đổi các thuộc tính bên trong object đó. Điều này xảy ra bởi vì const chỉ đảm bảo tham chiếu (địa chỉ bộ nhớ) tới object không thay đổi, nhưng không ngăn cản việc thay đổi nội dung mà tham chiếu đó trỏ đến.

// - Ví dụ:

const person = { name: "John" };
person.name = "Jane"; // Hợp lệ
console.log(person); // {name: "Jane"}
// Uncaught TypeError: Assignment to constant variable.
person = { name: "Mike" }; // Lỗi

// - Trong ví dụ trên, việc thay đổi giá trị của thuộc tính name là hợp lệ vì bạn không thay đổi tham chiếu của biến person. Tuy nhiên, việc cố gắng gán person với một object mới là không hợp lệ và sẽ dẫn đến lỗi vì bạn không thể thay đổi tham chiếu của biến được khai báo với const.

// - Điều này làm cho const rất hữu ích khi bạn muốn đảm bảo không ai có thể gán lại toàn bộ object, nhưng bạn vẫn có thể thêm, sửa hoặc xóa các thuộc tính bên trong object đó, cho phép một mức độ linh hoạt nhất định khi làm việc với các cấu trúc dữ liệu phức tạp như object và array.
