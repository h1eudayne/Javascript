 function Character(name, hp, atk, def) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.attack = target => {
        const damage = Math.max(this.atk - target.def , 0);
        target.hp -= damage;
        console.log(`${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`)
    };
    this.isAlive = () => {
        return this.hp > 0;
    };
}

const tom = new Character("Tom", 1000, 50, 5);
const jerry = new Character("Jerry", 500, 20, 20);

let round = 1;
while (tom.isAlive() && jerry.isAlive()) {
    console.log(`Round ${round}`);
    if(round % 2 === 0) {
        tom.attack(jerry);
    } else {
        jerry.attack(tom);
    }
    round++;
}

if(tom.isAlive()) {
    console.log(`${tom.name} win`);
}
else {
    console.log(`${jerry.name} win`);
}