const gradeStudent = (score) => {
  switch (true) {
    case score >= 90:
      return "Xuất sắc";
    case score >= 80:
      return "Giỏi";
    case score >= 70:
      return "Khá";
    case score >= 60:
      return "Trung bình";
    default:
      return "Yếu";
  }
};
// Sample usage
console.log(gradeStudent(85)); // Giỏi
console.log(gradeStudent(55)); // Yếu
