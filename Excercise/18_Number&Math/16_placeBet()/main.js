/**
 * Simulate the roll of three dice in the game "Bầu Cua Tôm Cá".
 * Each dice can land on one of the six sides: "Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai".
 * 
 * @returns {Array<string>} An array of three strings representing the result of each roll.
 */
function bauCuaRoll() {
    const faces = ["Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai"];
    const rollDice = () => faces[Math.floor(Math.random() * faces.length)];
    return [rollDice(), rollDice(), rollDice()];
}

/**
 * Simulate a bet in the game "Bầu Cua Tôm Cá".
 * Check if the player's bet is in the result of bauCuaRoll.
 * 
 * @param {string} bet - The face that the player bets on ("Bầu", "Cua", "Tôm", "Cá", "Gà", "Nai").
 * @param {number} amount - The amount of money the player bets.
 * @returns {number} The amount of money won or lost.
 */
function placeBet(bet, amount) {
    const rollResult = bauCuaRoll();

    const result = rollResult.filter(face => face === bet).length;

    return result > 0 ? amount * result : -amount
}

// Sample usage
console.log(placeBet("Bầu", 100)); // Kết quả có thể là 100, 200, 300, hoặc -100
console.log(placeBet("Cá", 50)); // Kết quả có thể là 50, 100, 150, hoặc -50
console.log(placeBet("Nai", 200)); // Kết quả có thể là 200, 400, 600, hoặc -200