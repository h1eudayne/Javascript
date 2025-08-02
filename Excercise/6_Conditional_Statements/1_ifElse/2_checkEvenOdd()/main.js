const checkEvenOdd = (number) => {
  if (number % 2 == 0) {
    return "Chẵn";
  } else {
    return "Lẻ";
  }
};

// Sample usage
console.log(checkEvenOdd(4)); // Chẵn
console.log(checkEvenOdd(5)); // Lẻ
