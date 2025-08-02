// 1.234.567 : một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng

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

const scaleTexts = ["", "nghìn", "triệu", "tỷ"];

function readThreeDigits(number, hasScale = false) {
    const hundred = Math.floor(number / 100);
    const remainder = number % 100;
    const tens = Math.floor(remainder / 10);
    const units = remainder % 10;

    let result = '';

    // Đọc hàng trăm
    if (hundred > 0) {
        result += unitTexts[hundred] + ' trăm ';
    } else if (hasScale) {
        result += " không trăm ";
    }

    // Đọc hàng chục
    if (tens > 1) {
        result += unitTexts[tens] + " mươi ";
    } else if (tens === 1) {
        result += "mười ";
    } else if (hasScale && units > 0) {
        result += "lẻ ";
    }

    // Đọc hàng đơn vị
    if (tens > 1 && units === 1) {
        result += "mốt ";
    } else if (tens > 0 && units === 5) {
        result += "lăm ";
    } else if (units > 0) {
        result += unitTexts[units];
    }
    return result.trim();
}

function readMoney(number) {
    if (number === 0) {
        return "không đồng";
    }
    let result = "";
    let index = 0;
    let lastIndex = Math.floor(String(number).length / 3);
    do {
        const threeDigits = number % 1000;
        const hashScale = index !== lastIndex;
        const text = readThreeDigits(threeDigits, hashScale);

        if(threeDigits > 0) {
            const unit = scaleTexts[index];
            result = `${text} ${unit} ${result}`;
        }

        number = Math.floor(number / 1000);
        index++;
    } while (number > 0);
    return result.trim() + " đồng";
}

console.log(readMoney(1234567)); // "Một triệu hai trăm ba mươi bốn nghìn năm trăm sáu mươi bảy đồng"
console.log(readMoney(0));

// - 1 : một(triệu)
// - 234 : hai trăm ba mươi bốn (nghìn)
// - 567 : năm trăm sáu mươi bảy (đồng)

// - 5 : năm
// - > 10 : lăm

// console.log(readThreeDigits(1)); // một đồng
// console.log(readThreeDigits(5)); // năm đồng
// console.log(readThreeDigits(10)); // mười đồng
// console.log(readThreeDigits(11)); // mười một đồng
// console.log(readThreeDigits(15)); // mười lăm đồng
// console.log(readThreeDigits(41)); // bốn mươi một đồng
// console.log(readThreeDigits(55)); // năm mươi lăm đồng
// console.log(readThreeDigits(100)); // một trăm đồng
// console.log(readThreeDigits(165)); // một trăm sáu mươi lăm đồng
// console.log(readThreeDigits(101)); // một trăm lẻ một đồng
// console.log(readThreeDigits(234)); // hai trăm ba mươi bốn đồng
// console.log(readThreeDigits(367)); // ba trăm sáu mươi bảy đồng

// console.log(readThreeDigits(2)); // hai
// console.log(readThreeDigits(2, true)); // không trăm lẻ hai
// console.log(readThreeDigits(15)); // mười lăm
// console.log(readThreeDigits(15, true));  // không trăm mười lăm


// tạo 1 hàm



