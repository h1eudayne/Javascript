const unitTexts = [
    '',
    'một',
    'hai',
    'ba',
    'bốn',
    'năm',
    'sáu',
    'bảy',
    'tám',
    'chín',
];

/**
 * Convert a number between 0 and 999 to Vietnamese text representation, handling special cases.
 * @param {number} number - The number to read in Vietnamese (0-999).
 * @returns {string} The number in words, handling special cases.
 */
function readThreeDigits(number) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    const tens = Math.floor(remainder / 10);
    const units = remainder % 10;

    let result = '';

    if (hundreds > 0) {
        result += unitTexts[hundreds] + ' trăm ';
    }

    if (tens > 1) {
        result += unitTexts[tens] + ' mươi ';
    } else if (tens === 1) {
        result += "mười ";
    }

    if (tens > 1 && units === 1) {
        result += 'mốt';
    } else if (tens > 0 && units === 5) {
        result += "lăm";
    } else if (units > 0) {
        result += unitTexts[units];
    }

    return result.trim();
}

// Sample usage
console.log(readThreeDigits(1)); // "một"
console.log(readThreeDigits(5)); // "năm"
console.log(readThreeDigits(10)); // "mười"
console.log(readThreeDigits(11)); // "mười một"
console.log(readThreeDigits(21)); // "hai mươi mốt"
console.log(readThreeDigits(25)); // "hai mươi lăm"
console.log(readThreeDigits(55)); // "năm mươi lăm"
console.log(readThreeDigits(101)); // "một trăm một"
console.log(readThreeDigits(234)); // "hai trăm ba mươi bốn"
console.log(readThreeDigits(445)); // "bốn trăm bốn mươi lăm"
console.log(readThreeDigits(0)); // ""
