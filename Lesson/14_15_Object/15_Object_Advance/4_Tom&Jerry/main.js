// Tom & Jerry
/**
 * Health/HP : Máu
 * Attack power/ATK: Tấn công
 * Defense: Thủ
 * Speed: Tốc độ
 * Counter Attack: Phản đòn
 */

// Function/Object constructor (Hàm tạo - Bản thiết kế đối tượng)

// Bản thiết kế nhân vật
function Character(name, hp, atk, defense, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed = speed;
    this.counterRate = counterRate;
    this.attack = target => {
        // Tính dame và đảm bảo không âm
        const damage = Math.max(this.atk - target.defense, 0);

        // Trừ HP của mục tiêu
        target.hp -= damage;
        console.log(`${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`);

        // Xử lý target phản công
        if (target.isAlive() && Math.random() < target.counterRate) {
            const counterDamage = Math.max(target.atk - this.defense, 0);
            this.hp -= counterDamage;
            console.log(`${target.name} tấn công lại ${this.name}, gây ra ${counterDamage} sát thương. ${this.name} còn lại ${this.hp} máu.`);

        }
    };
    this.isAlive = () => {
        return this.hp > 0;
    };
}

// Hàm xử lý lượt đánh
function battleRound(attacker, defender) {
    attacker.attack(defender);
    if(defender.isAlive() && attacker.isAlive()) {
        defender.attack(attacker);
    }
}

// Hàm bắt đầu trận đấu
function battle(char1, char2) {
    let round = 1;
    while (char1.isAlive() && char2.isAlive()) {
        console.log(`Round ${round} :`);
        if (char1.speed > char2.speed ) {
            battleRound(char1, char2);
        } else if( char1.speed < char2.speed) {
            battleRound(char2, char1);
        } else {
            if (Math.random() < 0.5) {
                // Nếu tốc độ bằng nhau, chọn ngẫu nhiên ai đánh trước
                battleRound(char1, char2);
            } else {
                battleRound(char2, char1);
            }
        }
        round++;
    }

    const win = char1.isAlive() ? char1 : char2;
    console.log(`${win.name} wins!`);
    return win;
}

// Tạo nhân vật Tom
const tom = new Character("Tom", 1000, 50, 5, 30, 0.5);

// Tạo nhân vật Jerry
const jerry = new Character("Jerry", 500, 20, 20, 30, 0.2);

battle(tom, jerry);

// Object literal

// const tom = {
//     name : "Tom",
//     hp : 1000,
//     atk : 50,
//     def : 5,
//     attack(target) {
//         const damage = Math.max(this.atk - target.def , 0);
//         target.hp  -= damage ;
//         console.log(`${this.name} "phang" ${target.name} gây ${damage} sát thương, ${target.name} còn ${target.hp} máu`);
//     },
//     isAlive() {
//         return this.hp > 0;
//     }
// }

// const jerry = {
//     name : "Jerry",
//     hp : 500,
//     atk: 20,
//     def : 20,
//     attack(target) {
//         const damage = Math.max(this.atk - target.def , 0);

//         target.hp  -= damage > 0 ? damage : 0;

//         console.log(`${this.name} "phang" ${target.name} gây ${damage} sát thương, ${target.name} còn ${target.hp} máu`);
//     },
//     isAlive() {
//         return this.hp > 0;
//     }
// }

// // Cho 2 nhân vật "phang" nhau
// let round = 1;
//
// while (tom.isAlive() && jerry.isAlive()) {
//     console.log(`Round ${round}`);
//
//     if(round % 2 === 0) {
//         // Tom danh o cac round chan
//         tom.attack(jerry);
//     }
//     else {
//         //Jerry danh o cac roun le
//         jerry.attack(tom);
//     }
//
//     round++;
// }

//Kiem tra nhan vat thang
// if(tom.isAlive()) {
//     console.log(`${tom.name} win`);
// }
// else {
//     console.log(`${jerry.name} win`);
// }