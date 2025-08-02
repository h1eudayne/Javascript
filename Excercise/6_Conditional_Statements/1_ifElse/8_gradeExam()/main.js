/**
 * Classifies exam scores into grades.
 */
function gradeExam(score) {
  if (score >= 90) return "Xuất sắc";
  if (score >= 80) return "Giỏi";
  if (score >= 70) return "Khá";
  if (score >= 60) return "Trung bình";
  return "Yếu";
}

// Sample usage
console.log(gradeExam(85)); // Giỏi
console.log(gradeExam(55)); // Yếu
