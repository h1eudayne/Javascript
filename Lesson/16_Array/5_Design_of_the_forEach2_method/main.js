// Tự thiết kế phương thức forEach2
// - Mục đích
// + Việc tự thiết kế lại phương thức forEach không chỉ giúp bạn hiểu sâu hơn về cơ chế của các hàm lặp trong JavaScript, mà còn cải thiện kỹ năng lập trình và khả năng giải quyết vấn đề của bạn. Bài viết này sẽ hướng dẫn bạn cách triển khai phương thức forEach2, mô phỏng lại hành vi của forEach gốc.

// - Triển khai
// + Bạn có thể thực hiện phương thức forEach2 như sau:

Array.prototype.forEach2 = function(cb, thisArg) {
  // Lấy chiều dài của mảng
  const length = this.length;
  
  // Lặp qua từng phần tử của mảng
  for (let i = 0; i < length; i++) {
    // Kiểm tra phần tử tại vị trí i có
    // tồn tại trong mảng không
    if (i in this) {
        // Gọi hàm callback với ba tham số:
        // phần tử hiện tại, index, và mảng gốc
        // thisArg được sử dụng làm giá trị
        // this trong khi gọi callback
        cb.call(thisArg, this[i], i, this);
    }
  }
};

//- Sau đó, sử dụng forEach2 tương tự như forEach:

// + Sử dụng phương thức forEach2
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach2(function(item, index) {
    console.log(index, item);
});
/*
0
"apple"
1
"banana"
2
"cherry"
*/

// - Lưu ý:
// + Phương thức forEach2 được thiết kế để chỉ gọi hàm callback cho các phần tử tồn tại trong mảng, bỏ qua các phần tử không được định nghĩa.
// + Sử dụng call để cho phép thiết lập giá trị this trong hàm callback, đây là cách mà forEach bản gốc cũng sử dụng để có thể truyền thisArg.
// + Bằng cách triển khai và sử dụng forEach2, bạn có thể dễ dàng thấy cách một phương thức như forEach được thiết kế và hoạt động như thế nào bên trong JavaScript, từ đó có thêm cơ sở để hiểu sâu hơn về lập trình JavaScript.