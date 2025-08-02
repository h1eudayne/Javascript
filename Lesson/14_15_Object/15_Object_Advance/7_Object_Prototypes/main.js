function Character(name, hp, atk) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;

    // Nội bộ
    let message = "Hello";
    this.getMessage = function() {
        return message;
    }

    // this.attack = (defender) => {
    //     defender.hp -= this.atk;
    //     console.log(`${this.name} attacks ${defender.name}`);
    // }
}


    // 1 object có thể kế thừa các thuộc tính và phương thức nhưng cần kế thừa thông qua prototype
    // Vậy prototype là gì?
    // Là 1 đối tượng  kế thừa trong javascript
    // Mỗi khi tạo 1 hàm trừ hàm arrow function ra thì tất cả hàm khác đều có prototype

    // VD thêm thuộc tính là speed = 100
    // Rất tiện nhưng khi cần speed nay mang nhiều giá trị khác nhau thì sẽ không được , nên dùng khi thuộc tính chỉnh mang 1 giá trị duy nhất
    // Lúc này bạn cần phải thêm thuộc tính speed vào trong constructor
    Character.prototype.speed = 100;

    // VD thêm phương thức là attack
    // Nếu phương thức này cần truy cập đến biến hoặc thuộc tính cục bộ của đối tượng thì sẽ không truy cập được
    // Đối với hàm tạo tự tạo ra có thể viết được bên trong hàm tạo, còn hàm tạo có sẵn từ javascript thì phải viết thông qua prototype
    // Hạn chế dùng prototype để thêm vào các hàm tạo có sẵn của ngôn ngữ
    // Không an toàn, dễ bị ghi đè
    Character.prototype.attack = function(defender) {
        defender.hp -= this.atk;
        console.log(`${this.name} attacks ${defender.name}`);
    };

    // Lỗi
    // Character.prototype.getMessage = function() {
    //     console.log(message);
    // };

    console.log(Character.prototype); // {} sẽ tạo ra 1 Object rỗng
    // Bạn có thể thêm vào  object rỗng đó thuộc tính và phương thức mới
    // Khi đó mọi đối tượng dùng từ khóa new được tao ra từ hàm Character sẽ được kế thừa lại những thuộc tính và phương thức đó
    

    const tom = new Character("Tom", 100, 20);
    const jerry = new Character("Jerry", 80, 10);

    // Bây giờ tại các object được tạo bởi Character sẽ truy câp được thuộc tính speed
    // Tuy nhiên khi in object ra thì sẽ không thấy thuộc tính speed và phương thức attack
    // Bởi vì thuộc tính và phương thức có thể thấy là thuộc tính và phương thức của chính object đó
    // Còn những phương thức và thuộc tính đuợc kế thừa từ prototype sẽ không thấy, bởi vì không thuộc trực tiếp của object đó
    // Nhưng bạn vẫn có thể thấy được nó khi in/mở ra prototype của object đó


    // Kiểm tra xem thuộc tính có thuộc về object hay không?
    console.log(tom.hasOwnProperty("name")); // true
    console.log(tom.hasOwnProperty("speed")); // false
    

    // console.log(tom);
    // console.log(tom.speed); // 100
    
    // console.log(jerry);
    // console.log(jerry.speed); // 100

    // tom.attack(jerry);


