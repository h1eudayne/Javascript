const calculateDiscount = (total) => {
  if (total > 1000) {
    return total - (total * 15) / 100;
  } else if (total >= 500) {
    return total - (total * 10) / 100;
  } else {
    return total;
  }
};

// Sample usage
console.log(calculateDiscount(1200)); // 1020
console.log(calculateDiscount(450)); // 450
