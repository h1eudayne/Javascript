/**
 * Function returns the longest word in the input sentence
 * @param {string} sentence - The sentence to find the longest word in
 * @returns {string} - The longest word in the sentence
 */
function findLongestWord(sentence) {
    if(typeof sentence !== "string") {
        return "Invalid input";
    }
    let result = "";
    let words = sentence.split(" ");
    let longest = words[0];
    for(let i = 1 ; i < words.length ; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }
    }
    result = longest;
    return result;
}

// Sample usage
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "quick"
console.log(findLongestWord("May the force be with you")); // "force"
console.log(findLongestWord("To be or not to be")); // "not"
console.log(findLongestWord(12345)); // "Invalid input"
console.log(findLongestWord("")); // ""