/** 
 * Formats the credit card number by masking all but the last 4 digits and adds spaces every 4 digits without regex.
 * @param {string|number} cardNumber - The credit card number.
 * @param {string} maskChar - The character to use for masking (default is '*').
 * @returns {string} - The masked credit card number with spaces.
 */
function formatCardNumber(cardNumber, maskChar = '*') {
    let cardStr = `${cardNumber}`;
    let length = cardStr.length;
    let result = [];

    if(length < 16) {
        return "Invalid card number";
    }

    let masked =  cardStr.slice(-4).padStart(length, maskChar);

    for(let i = 0 ; i < length ; i += 4) {
        result.push(masked.slice(i, i + 4));
    }

    return result.join(" ");
    
}

// Sample usage
console.log(formatCardNumber(1234567812345678)); // "**** **** **** 5678"
console.log(formatCardNumber(9876543212345678, '#')); // "#### #### #### 5678"
console.log(formatCardNumber(123456789)); // "Invalid card number"
console.log(formatCardNumber(1234567812345678, '*')); // "**** **** **** 5678"