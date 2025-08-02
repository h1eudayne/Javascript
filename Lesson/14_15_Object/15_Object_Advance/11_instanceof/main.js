// instanceof

//EX

const colors = ["red"];

console.log(colors instanceof Array);

//instanceof sẽ kiểm tra luôn trong prototype

function Cat(name) {
  this.name = name;
}

function Mouse(name) {
  this.name = name;
}

const tom = new Cat("Tom");
console.log(tom instanceof Cat);

// Con -> cha -> ông -> .... -> Ông tổ

// Con instanceof cha => true
// Con instanceof ông => true
// Con instanceof Ông tổ => true

// Nếu muốn kiểm tra tom khác obj thì có các cách sau

console.log(tom.__proto__ === Object.prototype); //false
console.log(tom.constructor === Object); //false
