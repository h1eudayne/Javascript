const unitTexts = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
];

/**
 * Read a number up to three digits, handling special cases like "mốt", "lăm", and "lẻ".
 * If `hasScale` is true, add "không trăm" or "lẻ" when appropriate.
 * @param {number} number - A three-digit number.
 * @param {boolean} hasScale - Whether the number is part of a larger scale (thousand, million).
 * @returns {string} The number in words.
 */
function readThreeDigits(number, hasScale = false) {
    const hundreds = Math.floor(number / 100);
    const remainder = number % 100;
    const tens = Math.floor(remainder / 10);
    const units = remainder % 10;

    let result = "";

    if (hundreds > 0) {
        result += unitTexts[hundreds] + " trăm ";
    } else if (hasScale) {
        result += "không trăm ";
    }

    if (tens > 1) {
        result += unitTexts[tens] + " mươi ";
    } else if (tens === 1) {
        result += "mười ";
    } else if (hasScale && units > 0) {
        result += "lẻ ";
    }

    if (tens > 1 && units === 1) {
        result += "mốt";
    } else if (tens > 0 && units === 5) {
        result += "lăm";
    } else if (units > 0) {
        result += unitTexts[units];
    }

    return result.trim();
}

// Sample usage
console.log(readThreeDigits(2)); // "hai"
console.log(readThreeDigits(2, true)); // "không trăm lẻ hai"
console.log(readThreeDigits(20)); // "hai mươi"
console.log(readThreeDigits(20, true)); // "không trăm hai mươi"
console.log(readThreeDigits(205)); // "hai trăm năm"
console.log(readThreeDigits(205, true)); // "hai trăm lẻ năm"