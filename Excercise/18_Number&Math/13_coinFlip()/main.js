/**
 * Simulate a coin flip and return "Heads" or "Tails".
 * The function randomly chooses between the two options.
 *
 * @returns {string} "Heads" or "Tails"
 */
function coinFlip() {
    return Math.random() <= 0.5 ? "Heads" : "Tails";
}

// Sample usage
console.log(coinFlip()); // Kết quả có thể là "Heads" hoặc "Tails"