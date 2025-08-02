/**
 * Checks if the age is adult or minor.
 */
const checkAge = (age) => {
  if (age >= 18) {
    return "Người lớn";
  } else {
    return "Vị thành niên";
  }
};

// Sample usage
console.log(checkAge(20)); // Người lớn
console.log(checkAge(16)); // Vị thành niên
