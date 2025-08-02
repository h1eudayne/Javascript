// Phương thức forEach
// - forEach là gì?
// + forEach là một phương thức trong JavaScript cho phép thực hiện một hàm lên mỗi phần tử của mảng. Phương thức này không trả về giá trị mới mà chỉ thực hiện hành động lặp qua và xử lý các phần tử của mảng.

// Cú pháp:
// array.forEach(function(currentValue, index, arr) { ... }, thisValue);
//   ^                          ^         ^     ^               ^
//   |                    p/tử hiện tại   |     |             obj để this tham chiếu tới
//   -->Chính mảng gọi forEach(là 1 th/chiếu)---|
//                                        |
//                               index của p/tử hiện tại   

// Ví dụ:

const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(function(item, index) {
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

const fruits1 = ['apple', 'banana', 'cherry'];
function handle (fruit, index , arr) {
    console.log(fruit);
    console.log(index);
    console.log(arr);
}
fruits1.forEach(handle);

/*
    "apple"
    0
    (3) ['apple', 'banana', 'cherry']
    "banana"
    1
    (3) ['apple', 'banana', 'cherry']
    "cherry"
    2
    (3) ['apple', 'banana', 'cherry']
*/


// + Phương thức forEach được sử dụng để thực hiện các hành động lặp đi lặp lại trên mỗi phần tử của mảng. Nó hữu ích khi bạn cần áp dụng một hàm lên từng phần tử của mảng.

// - Ví dụ sử dụng
// + Dùng forEach để thực hiện phép tính
// + Bạn có thể sử dụng forEach để tính tổng các giá trị trong mảng.

// Ví dụ:

const numbers = [1, 2, 3, 4];
let sum = 0;
numbers.forEach( number => {
    sum += number;
});

console.log(sum);



// + Dùng forEach để thêm thuộc tính mới vào mỗi đối tượng trong mảng
// + forEach có thể được dùng để thêm hoặc sửa đổi thuộc tính của các đối tượng trong mảng.

// Ví dụ:

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
users.forEach(user => {
  // Thêm thuộc tính isActive
  user.isActive = true;
});
console.log(users); 
/*
(2) [Object, Object]
0:{name: 'Alice', age: 25, isActive: true}
1:{name: 'Bob', age: 30, isActive: true}
*/


// + Tóm lại, các bài toán cần duyệt qua các phần tử của mảng thì forEach có thể là một lựa chọn thay thế cho vòng lặp truyền thống, giúp code trở nên gọn gàng và rõ ràng hơn.

// Khác biệt giữa forEach và vòng lặp khi duyệt mảng
// - Cả forEach và vòng lặp truyền thống (như for, while) đều có thể được sử dụng để duyệt qua các phần tử của mảng trong JavaScript, nhưng chúng có một số khác biệt về cách sử dụng và tính năng.

// - Khác biệt về tính năng

// forEach:
// + Được thiết kế để duyệt qua mỗi phần tử của mảng một cách dễ dàng và thực thi một hàm cho mỗi phần tử.
// + Không thể sử dụng break hay continue để kết thúc sớm hoặc bỏ qua các phần tử. Việc sử dụng return trong forEach chỉ kết thúc hàm hiện tại chứ không kết thúc vòng lặp, lần lặp tiếp theo vẫn được diễn ra.

// Ex: return
const colors = ['red','green','blue'];

function run() {
    for(let color of colors) {
        if(color === 'red') {
            return;
        }
        console.log(color);
    }
}

run(); // rỗng

colors.forEach(color => {
    if(color === 'red') {
        return
    }
    console.log(color);
})

run(); // green blue

// + Chỉ thực hiện hàm với các phần tử có giá trị, không xử lý các phần tử trống (empty).
// + Vòng lặp truyền thống (for, while):
// + Có thể dừng hoặc thoát khỏi vòng lặp bất cứ lúc nào sử dụng break hoặc return (khi ở trong một hàm).
// + Cho phép điều khiển chi tiết hơn về quá trình lặp, như bỏ qua một số phần tử với continue hoặc điều chỉnh điều kiện lặp tại bất kỳ điểm nào.
// + Luôn duyệt qua tất cả các phần tử của mảng, kể cả các phần tử empty.


// - Khác biệt trong tính ứng dụng

// Sử dụng forEach:
// + Khi bạn muốn áp dụng một hàm lên mỗi phần tử của mảng và không quan tâm đến việc dừng hoặc thoát vòng lặp.
// + Khi bạn muốn áp dụng một hàm lên mỗi phần tử và muốn viết code gọn gàng, rõ ràng hơn.

// Sử dụng vòng lặp truyền thống:
// + Khi bạn cần điều khiển chi tiết hơn quá trình lặp, như dừng lặp khi điều kiện nhất định được thỏa mãn.
// + Khi bạn xử lý các bài toán phức tạp hơn, cần điều chỉnh logic lặp dựa trên điều kiện động.

// - Khác biệt về sự hiệu quả
// + Vòng lặp truyền thống có thể hiệu quả hơn forEach trong một số trường hợp, đặc biệt là khi bạn cần dừng vòng lặp sớm hoặc bỏ qua một số phần tử cụ thể. forEach có thể mang lại lợi ích về việc viết code sạch sẽ và ít lỗi hơn nhưng có thể không hiệu quả bằng vòng lặp truyền thống khi cần kiểm soát nhiều hơn về luồng thực thi.
// + Tóm lại, chọn forEach khi bạn cần một cách tiếp cận đơn giản, sạch sẽ để áp dụng một hàm lên mỗi phần tử của mảng và không cần kiểm soát chi tiết quá trình lặp. Sử dụng vòng lặp truyền thống khi bạn cần quản lý chi tiết việc thực hiện lặp, như thoát khỏi vòng lặp dựa trên điều kiện phức tạp hoặc khi hiệu suất là mối quan tâm chính.