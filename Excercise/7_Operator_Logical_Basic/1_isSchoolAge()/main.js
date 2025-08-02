const isSchoolAge = (age) => {
  if (age >= 6 && age <= 18) {
    return true;
  } else {
    return false;
  }
};

// Sample usage
console.log(isSchoolAge(5)); // false
console.log(isSchoolAge(10)); // true
