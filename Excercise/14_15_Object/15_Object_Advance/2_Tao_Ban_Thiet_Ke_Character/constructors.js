/**
 * Tạo ra một nhân vật với các điểm máu, sức mạnh tấn công, và khả năng phòng thủ.
 * @param {string} name Tên của nhân vật.
 * @param {number} hp Điểm máu của nhân vật.
 * @param {number} atk Sức mạnh tấn công của nhân vật.
 * @param {number} defense Khả năng phòng thủ của nhân vật.
 */
export function Character(name, hp, atk, defense) {
  this.name = name;
  this.hp = hp;
  this.atk = atk;
  this.defense = defense;
  this.attack = (target) => {
    const damage = Math.max(this.atk - target.defense, 0);
    target.hp -= damage;
    console.log(
      `${this.name} tấn công ${target.name}, gây ra ${damage} sát thương. ${target.name} còn lại ${target.hp} máu.`
    );
  };
  this.isAlive = () => {
    return this.hp > 0;
  };
}
