/**
 * Compares two numbers and returns the comparison result.
 */
const compareNumbers = (a, b) => {
  if (a === b) {
    return "Hai số bằng nhau";
  } else if (a > b) {
    return "Số thứ nhất lớn hơn";
  } else {
    return "Số thứ hai lớn hơn";
  }
};

// Sample usage
console.log(compareNumbers(3, 4)); // Số thứ hai lớn hơn
console.log(compareNumbers(5, 2)); // Số thứ nhất lớn hơn
console.log(compareNumbers(8, 8)); // Hai số bằng nhau
