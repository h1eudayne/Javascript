function calculate(operation, a, b) {
    const operations = {
      add: () => a + b,
      subtract: () => a - b,
      multiply: () => a * b,
      divide: () => b === 0 ? 'Cannot divide by zero.' : a / b
    };
  
    // Tìm và thực hiện phép toán; nếu không tìm thấy, hiển thị thông báo lỗi
    const action = operations[operation];
    return action ? action() : 'Operation not recognized. Please use add, subtract, multiply, or divide.';
  }
  
  // Testing the function
  console.log(calculate('add', 5, 3));
  console.log(calculate('subtract', 5, 3));
  console.log(calculate('multiply', 5, 3));
  console.log(calculate('divide', 9, 3));
  console.log(calculate('divide', 5, 0));
  console.log(calculate('modulus', 5, 3));
  