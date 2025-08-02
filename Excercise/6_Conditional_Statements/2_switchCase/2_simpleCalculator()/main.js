const simpleCalculator = (operator, a, b) => {
  switch (operator) {
    case "+": {
      return a + b;
    }
    case "-": {
      return a - b;
    }
    case "*": {
      return a * b;
    }
    case "/": {
      if (b === 0) {
        return "Không thể chia cho 0";
      } else {
        return a / b;
      }
    }
    default:
      return "Phép tính không hợp lệ";
  }
};

// Sample usage
console.log(simpleCalculator("+", 5, 3)); // 8
console.log(simpleCalculator("/", 10, 0)); // Không thể chia cho 0
console.log(simpleCalculator("**", 2, 3)); // Phép tính không hợp lệ
