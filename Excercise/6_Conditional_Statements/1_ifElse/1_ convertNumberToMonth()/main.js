/**
 * Converts a number (1-12) to its corresponding Vietnamese month name.
 */
const convertNumberToMonth = (a) => {
  if (a == 1) {
    return "Tháng một";
  } else if (a == 2) {
    return "Tháng hai";
  } else if (a == 3) {
    return "Tháng ba";
  } else if (a == 4) {
    return "Tháng tư";
  } else if (a == 5) {
    return "Tháng năm";
  } else if (a == 6) {
    return "Tháng sáu";
  } else if (a == 7) {
    return "Tháng bảy";
  } else if (a == 8) {
    return "Tháng tám";
  } else if (a == 9) {
    return "Tháng chín";
  } else if (a == 10) {
    return "Tháng mười";
  } else if (a == 11) {
    return "Tháng mười một";
  } else if (a == 12) {
    return "Tháng mười hai";
  } else {
    return "Tháng không hợp lệ";
  }
};

// Sample usage
console.log(convertNumberToMonth(1)); // Tháng một
console.log(convertNumberToMonth(5)); // Tháng năm
