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

const scaleTexts = ["", "nghìn", "triệu", "tỷ"];

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

/**
 * Convert a number to Vietnamese text representation, including "nghìn", "triệu", "tỷ".
 * @param {number} number - The amount of money to read.
 * @returns {string} The number in words with the unit "đồng".
 */
function readMoney(number) {
    if (number === 0) {
        return "không đồng";
    }
    let result = "";
    let index = 0;
    do {
        const threeDigits = number % 1000;
        const text = readThreeDigits(threeDigits);

        if(threeDigits > 0) {
            const unit = scaleTexts[index];
            result = `${text} ${unit} ${result}`;
        }

        number = Math.floor(number / 1000);
        index++;
    } while (number > 0);
    return result.trim() + " đồng";
}

// Sample usage
console.log(readMoney(0)); // "không đồng"
console.log(readMoney(123)); // "một trăm hai mươi ba đồng"
console.log(readMoney(1234567)); // "một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng"
console.log(readMoney(1000000)); // "một triệu đồng"
console.log(readMoney(1000000000)); // "một tỷ đồng"

console.log(readMoney(1001)); // "một nghìn một đồng"
console.log(readMoney(250034567)); // "hai trăm năm mươi triệu ba mươi bốn nghìn năm trăm sáu mươi bảy đồng"