// Object.create()
// Object.create() là 1 phương thức để tạo ra 1 đối tượng mới và chúng ta có thể chỉ định một đối tượng khác làm prototype cho đối tượng mới đó

//Ưu điểm
// - Đơn giản, dễ dàng triển khai

// Kết quả tuy giống nhau nhưng tính đồng nhất nó lại không tốt như hàm tạo bởi vì nó chỉ đảm bảo các đối tượng được tạo ra sẽ kế thừa từ cùng 1 prototype. Nhưng không đảm bảo được việc chúng sở hữu các thuộc tính riêng là giống nhau.
// Tuy nhiên, nếu muốn tạo ra các đối tượng chỉ cần chúng giống nhau về thuộc tính và phương thức kế thừa từ prototype , còn những thuộc tính riêng cần phải khác nhau thì hàm tạo không phù hợp bằng Object.create()
// Còn nhu cầu đơn giản, như chỉ cần 1 object và kế thừa từ 1 object có sẵn thì dùng Object.create(). Đôi khi muốn tạo ra các đối tượng 1 cách đơn giản giống nhau về prototype nhưng khác nhau về thuộc tính riêng thì dùng Object.create()
const prototype = {
    // attack : function (target) {
    attack(target) {
        target.hp -= this.attack;
    },
};

const tom =  Object.create(prototype);

tom.name = "Tom";
tom.hp = 100;
tom.atk = 20;

console.log(tom);

const jerry =  Object.create(prototype);

jerry.name = "Jerry";
jerry.hp = 80;
jerry.atk = 10;

console.log(jerry);


//Ưu điểm
// - Giống như tạo ra 1 bản thiết kế, đảm bảo cho việc các đối tượng được tạo ra là giống nhau từ thuộc tính tới phương thức, kể cả thuộc tính hay phương thức có kế thừa hay không vẫn sẽ giống nhau

// Khi cần sự đồng nhất, sự chặt chẽ, có nhu cầu tái sử dụng lại code này nhiều lần thì sử dụng hàm tạo
// function Charater(name, hp , atk) {
//     this.name = name;
//     this.hp = hp;
//     this.atk = atk;
// }

// Charater.prototype.attack = function (defender) {
//     defender.hp -= this.atk;
// }

// const tom = new Charater("Tom", 100, 20);
// const jerry = new Charater("Jerry", 80 , 10);

// console.log(tom);
// console.log(jerry);

