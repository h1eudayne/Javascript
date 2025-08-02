/**
 * Convert a number between 0 and 999 to Vietnamese text representation.
 * @param {number} number - The number to read in Vietnamese (0-999).
 * @returns {string} The number in words, without special cases handling.
 */
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
    "chín"
]

function readThreeDigits(number) {
    const hundred = Math.floor(number / 100);
    const tens = Math.floor((number) % 100 / 10);
    const units = number % 10;
    
    let result = "";
    
    if(hundred > 0) {
		result += unitTexts[hundred] + " trăm ";
	}
	
	if (tens > 0) {
		result += unitTexts[tens] + " mươi ";
	}
	
	if (units > 0) {
		result += unitTexts[units];
	}
	
	return result.trim();
}

// Sample usage
console.log(readThreeDigits(1)); // "một"
console.log(readThreeDigits(5)); // "năm"
console.log(readThreeDigits(10)); // "một mươi"
console.log(readThreeDigits(11)); // "một mươi một"
console.log(readThreeDigits(41)); // "bốn mươi một"
console.log(readThreeDigits(55)); // "năm mươi năm"
console.log(readThreeDigits(100)); // "một trăm"
console.log(readThreeDigits(234)); // "hai trăm ba mươi bốn"
console.log(readThreeDigits(367)); // "ba trăm sáu mươi bảy"
console.log(readThreeDigits(0)); // ""
