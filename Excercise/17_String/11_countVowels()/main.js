/**
 * Function returns the number of vowels in the input string
 * @param {string} str - The string to count the vowels in
 * @returns {number} - The number of vowels in the string
 */
function countVowels(str) {
    let count = 0;

    if(typeof str !== "string") {
        return "Invalid input";
    }
    
    for(const word of str.toLowerCase()) {
        if(word.includes("a") || word.includes("i") || word.includes("u") || word.includes("e") || word.includes("o")) {
            count++;
        }
    }
    return count;
}

// Sample usage
console.log(countVowels("hello")); // 2
console.log(countVowels("HELLO")); // 2
console.log(countVowels("JavaScript")); // 3
console.log(countVowels("why")); // 0
console.log(countVowels(123)); // "Invalid input"
console.log(countVowels("")); // 0