/**
 * Classifies students based on average score.
 */

const classifyStudent = (score) => {
  if (score > 8) {
    return "Giỏi";
  } else if (score >= 6) {
    return "Khá";
  } else {
    return "Trung bình";
  }
};
// Sample usage
console.log(classifyStudent(9)); // Giỏi
console.log(classifyStudent(7)); // Khá
console.log(classifyStudent(1)); // Trung bình
