/**
 * Simulate the roll of three dice in the game "Bầu Cua Tôm Cá".
 * Each dice can land on one of the six sides: "Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai".
 * 
 * @returns {Array<string>} An array of three strings representing the result of each roll.
 */

// C1 
// function bauCuaRoll() {
//     const array = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
//     const result = [];

//     for(let i = 0 ; i < 3 ; i++) {
//         result.push(array[Math.floor(Math.random() * array.length)]);
//     }

//     return result;
// }

// C2
function bauCuaRoll() {
    const array = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
    const roll = () => array[Math.floor(Math.random() * array.length)];
    return [roll(), roll(), roll()];
}
// Sample usage
console.log(bauCuaRoll()); // Kết quả có thể là ["Bầu", "Cá", "Nai"]
console.log(bauCuaRoll()); // Kết quả có thể là ["Cua", "Tôm", "Gà"]
console.log(bauCuaRoll()); // Kết quả có thể là ["Gà", "Bầu", "Cua"]
// Blabla...