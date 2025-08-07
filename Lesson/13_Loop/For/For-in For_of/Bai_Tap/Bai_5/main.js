const scores = [8, 9, 7, 10, 9.5];
let totalScore = 0;

for (const score of scores) {
  totalScore += score;
}

const averageScore = totalScore / scores.length;

console.log(`Điểm trung bình: ${averageScore}`);
