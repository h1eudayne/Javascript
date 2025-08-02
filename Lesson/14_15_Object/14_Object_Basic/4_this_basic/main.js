// * Từ khóa this là gì?

// - this là một từ khóa trong Javascript, tham chiếu đến đối tượng mà nó thuộc về. Giá trị của this phụ thuộc vào ngữ cảnh mà nó được sử dụng, nghĩa là nó có thể thay đổi giá trị tùy thuộc vào cách mà function chứa nó được gọi.

// - Ví dụ: Trường hợp this tham chiếu tới đối tượng mà nó thuộc về.

const person = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    console.log(this);
  },
};
person.getFullName(); // {firstName: "John", lastName: "Smith", getFullName: ƒ getFullName()}

// - Trường hợp sử dụng this bên trong một phương thức được gọi thông qua một object, ví dụ person.getFullName(); lúc này this sẽ trả về chính object mà nó thuộc về (hay object được sử dụng để truy cập phương thức), ở ví dụ này this sẽ tham chiếu tới person.

// - Ví dụ: Hoàn thiện phương thức getFullName() để in ra “tên đầy đủ”.

const person1 = {
  firstName: "John",
  lastName: "Smith",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person1.getFullName()); // John Smith

// * Tại sao cần sử dụng this?

// - this cung cấp một phương thức linh hoạt để truy cập vào đối tượng mà function đang thao tác. Điều này không chỉ tăng cường khả năng tái sử dụng và bảo trì code mà còn giúp làm cho chương trình của chúng ta dễ hiểu và quản lý hơn.

// - Ví dụ: Sử dụng this trong phương thức của đối tượng

const person2 = {
  name: "Alice",
  greet: function () {
    // Nên viết là
    console.log("Hello, " + this.name);
    // Thay vì
    //console.log('Hello, ' + person2.name);
  },
};
person2.greet(); // Hello, Alice

// - Tại ví dụ trên, sử dụng person2.name không linh hoạt bằng this.name, vì khi biến person2 được đổi thành tên khác thì person2.name sẽ lỗi vì biến person2 không còn tồn tại, do đó sẽ phải sửa lại code ở nhiều chỗ.
